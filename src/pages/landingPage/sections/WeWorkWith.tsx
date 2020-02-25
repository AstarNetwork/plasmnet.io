import React from 'react';
//import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Sponsors } from '../../../database/links';

const useStyles = makeStyles(theme => ({
    logo: {
        maxHeight: 160,
        maxWidth: '100%',
        height: 'auto',
        width: 'auto'
    },
    heroContent: {
        //backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        //background: '#47BCFF',
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
    btnPrimary: {
        background: 'linear-gradient(45deg, #1d417f 30%, #2e8ec0 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    media: {
        height: 210,
    }
}));

const cards = Sponsors;

interface Props { }

const OurTeam: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id='sponsor-section'>
            <CssBaseline />
            <Container maxWidth='sm'>
                <Typography component='h3' variant='h3' align='center' color='textPrimary' gutterBottom>
                    Other teams working with us
                    </Typography>
            </Container>

            <Container className={classes.cardGrid} maxWidth='md'>
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item key={card.className} xs={12} sm={6} md={4}>
                            <div className='sponsor' key={card.className}>
                                <a href={card.link} rel='noopener noreferrer' target='_blank'>
                                    <img
                                        src={card.image}
                                        alt={card.description}
                                        className={classes.logo}
                                    />
                                </a>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default OurTeam;