import BigNumber from 'bignumber.js';

export interface CardItem {
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

export interface LockEvent {
    eth: BigNumber; // locked value in wei
    duration: number; // in Unix epoch seconds
    lock: string; // lock address
    introducer: string;
    blockNo: number;
    timestamp: number; // in Unix epoch seconds
    lockOwner: string; // locker's address
    transactionHash: string;
}
