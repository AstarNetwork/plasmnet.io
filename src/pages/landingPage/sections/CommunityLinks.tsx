import React from 'react';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SocialButtons from '../../../components/SocialButtons';

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));

interface Props { }

const CommunityLinks: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <CssBaseline />
            <Container maxWidth='md'>
                <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                    Want to be part of all this?
                </Typography>

                <SocialButtons />
            </Container>
        </div>
    );
}

export default CommunityLinks;