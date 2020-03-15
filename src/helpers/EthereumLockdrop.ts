import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import Lockdrop from 'lockdrop-ui/app/src/contracts/Lockdrop.json';
import { LockEvent } from '../types/types';
import BN from 'bn.js';

const getWeb3: any = () =>
    new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener('load', async () => {
            // Modern dapp browsers...
            if ((window as any).ethereum) {
                const web3 = new Web3((window as any).ethereum);
                try {
                    // Request account access if needed
                    await (window as any).ethereum.enable();
                    // Acccounts now exposed
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            }
            // Legacy dapp browsers...
            else if ((window as any).web3) {
                // Use Mist/MetaMask's provider.
                const web3 = (window as any).web3;
                console.log('Injected web3 detected.');
                resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
                const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
                const web3 = new Web3(provider);
                console.log('No web3 instance injected, using Local web3.');
                resolve(web3);
            }
        });
    });

// this function will authenticate if the client has metamask installed and can communicate with the blockchain
export async function connectWeb3() {
    try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        if (web3 instanceof Web3) {
            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = (Lockdrop as any).networks[networkId];
            const instance = new web3.eth.Contract(
                Lockdrop.abi as any,
                deployedNetwork && deployedNetwork.address,
            ) as Contract;

            return instance;
        }
    } catch (error) {
        // Catch any errors for any of the above operations.
        //todo: display a graphical error message
        alert('Failed to load web3, accounts, or contract. Check console for details.');
        console.error(error);
    }
    // return an empty value
    return {} as Contract;
}

// returns an array of the entire list of locked events for the contract only once
export async function getLockEvents(instance: Contract): Promise<LockEvent[]> {
    // this will hold all the event log JSON with an arbitrary structure
    const lockEvents: LockEvent[] = [];

    // this value can be set as the block number of where the contract was deployed
    const startBlock = 0;
    try {
        const ev = await instance.getPastEvents('allEvents', {
            filter: { event: 'Locked' },
            fromBlock: startBlock,
            toBlock: 'latest',
        });
        ev.forEach(function(i) {
            //console.log(i);
            const e = i.returnValues;
            // getting key value pairs from the event value
            lockEvents.push({
                eth: e['eth'] as BN,
                duration: e['duration'] as number,
                lock: e['lock'] as string,
                introducer: e['introducer'] as string,
                blockNo: i.blockNumber,
                txHash: i.transactionHash,
            });
        });
    } catch (error) {
        console.log(error);
    }

    return lockEvents;
}
