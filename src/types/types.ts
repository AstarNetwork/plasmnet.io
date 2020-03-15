import BN from 'bn.js';

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

export interface LockEvent {
    eth: BN;
    duration: number;
    lock: string;
    introducer: string;
    blockNo: number;
    txHash: string;
}
