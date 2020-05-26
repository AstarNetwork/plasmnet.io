import { CardItem } from '../types/types';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';
import LayersIcon from '@material-ui/icons/Layers';

//todo: add more content here
export const PlasmStrength: CardItem[] = [
    {
        icon: LayersIcon,
        heading: 'Layer 2',
        content: "Plasm Network is in it's core, bringing Layer 2 to the Polkadot network",
    },
    {
        icon: TimerOutlinedIcon,
        heading: 'Fast transaction',
        content:
            'By leveraging the transactions to the child chain, Plasm Network is able to handle fast and high capacity transactions',
    },
    {
        icon: TagFacesOutlinedIcon,
        heading: 'Optimistic Virtual Machine',
        content:
            'Plasm Network implements OVM so that any dApps can run under a unified environment with minimum issues',
    },
    {
        icon: DehazeOutlinedIcon,
        heading: 'Substrate',
        content:
            'Plasm Network is built with Substrate, a forkless scalable blockchain framework that uses WebAssembly',
    },
    {
        icon: FilterTiltShiftOutlinedIcon,
        heading: 'Parachain',
        content:
            'Plasm Network can be a Polkadot Parachain that provides interoperability with other blockchains who are either a Parachian themselves or via a Bridge',
    },
    {
        icon: LastPageOutlinedIcon,
        heading: 'Open source',
        content: 'The Plasm ecosystem is open source, we encourage everyone to look in and join the future',
    },
];
