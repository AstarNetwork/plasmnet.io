import { CardItem } from '../types/types';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LockIcon from '@material-ui/icons/Lock';
import moment from 'moment';

const LOCKDROP_DURATION = 30; // days

//todo: add more content here
export const TokenInfo: CardItem[] = [
    {
        icon: MonetizationOnOutlinedIcon,
        heading: 'Value',
        content: 'PLM is the main exchange medium that represents value in the network',
    },
    {
        icon: FlashOnOutlinedIcon,
        heading: 'Operators',
        content: 'Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network',
    },
    {
        icon: AutorenewOutlinedIcon,
        heading: 'Decentralization',
        content: 'Having a well-distributed wealth amongst the community ensures decentralization',
    },
    {
        icon: CodeOutlinedIcon,
        heading: 'dApps Rewards',
        content:
            'PLM provide incentives to the developers creating great dApps with the most nominators by splitting the block validation rewards',
    },
    {
        icon: LockIcon,
        heading: 'Multi-Lockdrop',
        content: 'PLM is distributed via a Multi-Lockdrop, which is a modified lockdrop, popularized by Edgeware',
    },
];

// the time zone is set to UTC as default
export const LockdropStart = moment.unix(1598832000);

export const LockdropEnd = LockdropStart.clone().add(LOCKDROP_DURATION, 'days');

export const firstLockContract = '0x458dabf1eff8fcdfbf0896a6bd1f457c01e2ffd6';

export const secondLockContract = '0xa4803f17607B7cDC3dC579083d9a14089E87502b';
