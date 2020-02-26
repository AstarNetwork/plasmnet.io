import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Discussions } from '../database/links';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    community: {
        margin: theme.spacing(2,2),
        padding: theme.spacing(4,0),
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
    },
    socialButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    socialIcon: {
        height: 60,
        margin: theme.spacing(0, 5, 4),
    },
}));

const SocialButtons: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.community}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Join the community
            </Typography>

            <div className={classes.socialButton}>
                {Discussions.map(discussion => (
                    <a href={discussion.link} rel="noopener noreferrer" target="_blank" key={discussion.className}>
                        <img src={discussion.image} alt={discussion.className} className={classes.socialIcon} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialButtons;
