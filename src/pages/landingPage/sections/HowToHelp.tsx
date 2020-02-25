import React from 'react';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { Links, AppLinks } from '../../../database/links';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    listRoot: {
        width: '100%',
        maxWidth: 360,
        margin: 'auto',
    },
    avatar: {
        color: '#fff',
        backgroundColor: blue[500],
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),

    },
    btnPrimary: {
        background: 'linear-gradient(45deg, #1d417f 30%, #2e8ec0 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    socialButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

interface Props { }

const HowToHelp: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id='help-section'>
            <CssBaseline />
            <Container maxWidth='md'>
                <br />
                <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                    How you can help us
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                    Are you interested in our project? Then please consider the following, it really helps us!
                </Typography>

                <List className={classes.listRoot}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CodeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='For Developing'
                            secondary={<>
                                Give our <a href={Links.github}>repo</a> a look and provide us with feedback.
                                    Or develop <a href={AppLinks.inkPlayground}>smart contracts</a> with Plasm!
                                    </>}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <LocalLibraryIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='For Learning' secondary={<>
                            We have prepared several working documentation for beginners to get started hacking Plasm Network.
                            You can start from <a href={Links.docs}>our docs</a> and
                            our <a href='https://github.com/staketechnologies/plasmdocs/blob/master/wp/en.pdf'>whitepaper</a>.
                            Interact with our <a href={AppLinks.plasmnetIo}>Plasm Network client</a>.
                            </>} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <MonetizationOnIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='For Trading' secondary={<>
                            Are you interested in getting PLM tokens? You can start from our <a href={AppLinks.joinLockdrop}>lockdrop</a>.

                            </>} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <EmojiPeopleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='For Everyone' secondary={<>
                            Please consider joining our community for more discussion and announcements.
                            We have events like hackathons, channels for testnet faucet, talks and more!
                            Spread the word and considering being part of our community,
                            you don't have to know anything about blockchain as long as you love freedom.
                            </>} />
                    </ListItem>
                </List>
            </Container>
        </div>
    );
}

export default HowToHelp;