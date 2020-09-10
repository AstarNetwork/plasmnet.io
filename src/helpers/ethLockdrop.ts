/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bignumber.js';
import Web3Utils from 'web3-utils';
import { LockEvent } from '../types/types';

/**
 * parses through the given lock events to calculate the total amount of locked ETH
 * @param locks a list of lockdrop contract events
 * @param roundTo
 */
function calculateTotalEth(locks: LockEvent[], roundTo?: number): string {
    //let totalVal = new BigNumber(0);
    if (locks.length > 0 && Array.isArray(locks)) {
        const allVal = locks.map(e => {
            return e.eth;
        });

        const totalVal = allVal.reduce((a, b) => a.plus(b), new BigNumber(0));

        const _eth = Web3Utils.fromWei(totalVal.toFixed(), 'ether');

        if (roundTo) return new BigNumber(_eth).toFixed(roundTo, 5);
        return new BigNumber(_eth).toFixed();
    }
    return '0';
}

/**
 * Fetches ethereum lock event from the cache server.
 * This is a temporary cache server with not query
 * @param contractAddr contract address that emits the event
 */
const fetchEventsFromCache = async (contractAddr: string): Promise<LockEvent[]> => {
    const api = `https://cache.plasmnet.io/locks/cache-${contractAddr.slice(0, 6)}.json`;

    const res = await fetch(api);

    const jsonData: any[] = await res.json();

    const evs = jsonData.map(i => {
        return {
            eth: new BigNumber(i.eth),
            duration: i.duration,
            lock: i.lock,
            introducer: i.introducer,
            blockNo: i.blockNo,
            timestamp: i.timestamp,
            lockOwner: i.lockOwner,
            transactionHash: i.transactionHash,
        } as LockEvent;
    });

    return evs;
};

export async function getLockValue(contractAddr: string): Promise<string> {
    try {
        const events = await fetchEventsFromCache(contractAddr);
        const totalVal = calculateTotalEth(events, 4);
        return totalVal;
    } catch (e) {
        console.log(e);
        return '0';
    }
}
