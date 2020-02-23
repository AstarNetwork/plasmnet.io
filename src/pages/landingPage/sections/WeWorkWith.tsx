import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { TeamMembers } from '../../../database/teamMembers';

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        color: '#7FD1FF',
    },
    heroContent: {
        //backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = TeamMembers;

interface Props { }

const WeWorkWith: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className='section'>
            <CssBaseline />
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography component='h3' variant='h3' align='center' color='textPrimary' gutterBottom>
                        Other teams working with us
                    </Typography>
                </Container>

                <Container className={classes.cardGrid} maxWidth='md'>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    {/* <card.image style={{ fontSize: 60 }} className={classes.icon}></card.image> */}
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            {card.heading}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default WeWorkWith;