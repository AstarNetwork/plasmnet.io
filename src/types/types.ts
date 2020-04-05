export interface CardItem {
    id: number;
    icon: any;
    heading: string;
    content: string;
}

export interface TimelineItem {
    id: number;
    icon: any;
    heading: string;
    content: string;
    date: string;
}

export interface TableOfItem {
    id: number;
    content: string;
    link: string;
}

export interface LockTx {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    isError: string;
    txreceipt_status: string;
    input: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    confirmations: string;
}

export type LockTxArray = LockTx[];
