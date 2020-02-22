import { ICardItem } from '../types/types';
import TimerIcon from '@material-ui/icons/Timer';
import TagFacesIcon from '@material-ui/icons/TagFaces';

//todo: add more content here
export const PlasmStrength: ICardItem[] = [
    {
        id: 1,
        icon: TimerIcon,
        heading: 'Fast transaction',
        content: 'By leveraging the transactions to the child chain, Plasm Network is able to handle fast and high capacity transactions.'
    },
    {
        id: 2,
        icon: TagFacesIcon,
        heading: 'Optimistic Virtual Machine',
        content: 'Plasm Network implements OVM so that any dApps can run under a unified environment with minimum issues'
    }
]