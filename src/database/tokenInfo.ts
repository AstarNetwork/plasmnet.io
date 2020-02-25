import { ICardItem } from '../types/types';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LockIcon from '@material-ui/icons/Lock';

//todo: add more content here
export const TokenInfo: ICardItem[] = [
    {
        id: 1,
        icon: MonetizationOnOutlinedIcon,
        heading: 'Liquidity',
        content: 'PLM is the main exchange medium that represents value in the network'
    },
    {
        id: 2,
        icon: FlashOnOutlinedIcon,
        heading: 'Operation',
        content: 'Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network'
    },
    {
        id: 3,
        icon: AutorenewOutlinedIcon,
        heading: 'Decentralization',
        content: 'Having a well-distributed wealth amongst the community ensures decentralization'
    },
    {
        id: 4,
        icon: CodeOutlinedIcon,
        heading: 'More dApps',
        content: 'PLM provide incentives to the developers creating great dApps'
    },
    {
        id: 5,
        icon: LockIcon,
        heading: 'Multi-Lockdrop',
        content: 'PLM is distributed via a Multi-Lockdrop, which is a modified lockdrop, popularized by Edgeware'
    }
]

// this is just a temporary date
export const LockdropEnd = '2020-06-10';
export const LockdropStart = '2020-3-10';
// this is just a temporary value
export const LockValue = 5235;