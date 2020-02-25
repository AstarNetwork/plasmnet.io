import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';

//todo: add more content here
export const RoadmapItems = [
    {
        id: 1,
        icon: TagFacesOutlinedIcon,
        heading: 'Launch Plasm Network minimum testnet',
        content: 'Launch Plasm Network minimum testnet(Miniplasm)',
        date: '2019-Q3'
    },
    {
        id: 2,
        icon: LastPageOutlinedIcon,
        heading: 'Launch Plasm Network Testnet v3',
        content: 'Start the Testnet Lockdrop. Implemented Operator trading modules. Implemented Dapps Rewards modules.',
        date: '2019-Q4'
    },
    {
        id: 2,
        icon: TimerOutlinedIcon,
        heading: 'Start the Mainnet Lockdrop',
        content: 'Starting Mainnet Lockdrop only ETH, March 15th.',
        date: '2020-Q1'
    },
    {
        id: 3,
        icon: DehazeOutlinedIcon,
        heading: 'Launch Plasm Network Mainnet',
        content: 'Implements OVM Modules and starting Mainnet!',
        date: '2020-Q2'
    },
    {
        id: 4,
        icon: FilterTiltShiftOutlinedIcon,
        heading: 'Becomes a parachain.',
        content: 'Plasm Network is in it\'s core, bringing Layer 2 to the Polkadot network (Depends on Polkadot). And Starts 2-nd, 3-rd Lockdrop with ETC, BTC and DOT.',
        date: '2020-Q3'
    },
]