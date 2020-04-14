import BigNumber from 'bignumber.js';
import Web3Utils from 'web3-utils';
import { LockTxArray } from '../types/types';

export async function getLockValue(): Promise<string> {
    const url =
        'https://api.etherscan.io/api?module=account&action=txlist&address=0x458dabf1eff8fcdfbf0896a6bd1f457c01e2ffd6&startblock=0&endblock=latest&sort=asc';

    let totalLock = '';

    try {
        const res = await fetch(url);
        const data = await res.json();
        const result: LockTxArray = data.result;
        let totalVal = new BigNumber(0);

        // Memo: forEach will occur `forEach Is Not a Function` error sometime
        for (let i = 0; i < result.length; i++) {
            if (result[i].isError === '0') {
                const txVal = new BigNumber(result[i].value);
                totalVal = totalVal.plus(txVal);
            }
        }
        // Memo: Recursion
        if (totalVal.s !== null) {
            totalLock = new BigNumber(Web3Utils.fromWei(totalVal.toFixed(), 'ether')).decimalPlaces(1).toFixed();
        } else {
            getLockValue();
        }
    } catch (err) {
        console.error(err);
    }
    return totalLock;
}
