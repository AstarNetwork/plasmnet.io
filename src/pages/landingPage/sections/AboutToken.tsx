import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TokenInfo } from '../../../database/tokenInfo';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heroContent: {
            padding: theme.spacing(8, 0, 6),
            background: '#47BCFF',
        },
        avatar: {
            color: '#fff',
            backgroundColor: blue[500],
        }
    }),
);

const listItems = TokenInfo;

interface Props { }

const AboutToken: React.FC<Props> = () => {
    const classes = useStyles();
    //const theme = useTheme();

    return (
        <div className={classes.heroContent}>

            <Container maxWidth='md'>

                <Typography component='h3' variant='h3' align='center' color='textPrimary' gutterBottom>
                    The PLM token gives everyone the power to utilize Plasm Network
                </Typography>
                <List>
                    <Grid container spacing={4}>
                        {listItems.map(item => (
                            <Grid item key={item.id} xs={12} sm={6} md={4}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <item.icon style={{ color: 'white' }} size='large'></item.icon>
                                        </Avatar>
                                    </ListItemAvatar>


                                    <ListItemText >
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            {item.heading}
                                        </Typography>
                                        <Typography>
                                            {item.content}
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                        ))}
                    </Grid>
                </List>
            </Container>
        </div>

    );
}

export default AboutToken;