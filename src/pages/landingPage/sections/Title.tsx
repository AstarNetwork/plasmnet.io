import React from 'react';
import { Link } from 'react-scroll';

import { AppLinks } from '../../../database/links';
import { TableOfContents } from '../../../database/tableOfContents';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../../../styles/animation.scss';
import LockdropPanel from '../../../components/LockdropPanel';
import Grid from '@material-ui/core/Grid';
import { LockdropEnd, LockdropStart } from '../../../database/tokenInfo';
import ParticlesBg from 'particles-bg';
import { theme } from '../../../styles/theme';
import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import { TitleVariants, TitleTransition } from '../../../styles/titleTransitAnimation';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const useStyles = makeStyles(theme => ({
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: theme.spacing(5),
        //fontWeight: 700,
        maxWidth: '100%',
        overflowWrap: 'normal',
        fontFamily: '"Roboto", sans-serif;',
    },
    heroContent: {
        padding: '10% 10% 10%',
        width: '100%',
        maxWidth: '100%',
        background: 'transparent',
        display: 'grid',
        alignItems: 'center',
    },
    heroGrid: {
        justifyContent: 'center',
        padding: theme.spacing(5, 0.6, 5),
    },
    btnRow: {
        color: '#FFFFFF',
        height: theme.spacing(5.3),
        lineHeight: theme.spacing(0.5),
        fontSize: 18,
        position: 'relative',
        '&::before': {
            position: 'absolute',
            content: '',
            width: 36,
            height: 1,
            background: '#323232',
            top: theme.spacing(50),
            left: theme.spacing(10),
        },
    },
    link: {
        color: 'rgb(129, 133, 141)',
        cursor: 'pointer',
    },
}));

const Title: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id="ui-id">
            <Typography
                className={classes.title + ' SlideDown one'}
                component="h1"
                variant="h2"
                align="center"
                color="primary"
                gutterBottom
            >
                Plasm Network is
                <br /> a scaling dApps platform on Substrate
            </Typography>
            <Grid className={classes.heroGrid} container direction="row-reverse" spacing={1} alignItems="center">
                <Grid item xs={12} sm={6} md className="SlideUp one">
                    {/* Time standard: UTC  */}
                    {/* <LockdropInfo countdownDate="2020-03-15 00:00:00" /> */}
                    <LockdropPanel endTime={LockdropEnd} startTime={LockdropStart} />
                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            <Grid container spacing={2} justify="center" className={classes.heroGrid + ' SlideUp two'}>
                                <Grid item>
                                    <a href={AppLinks.plasmnetIo} rel="noopener noreferrer" target="_blank">
                                        <Button color="primary" size="large" variant="contained" className="ui-button">
                                            Launch UI
                                        </Button>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={AppLinks.joinLockdrop} rel="noopener noreferrer" target="_blank">
                                        <Button size="large" className="ui-button" variant="outlined" color="primary">
                                            Join Lockdrop
                                        </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {TableOfContents.map(content => (
                        <div className={classes.btnRow + ' Fade-in one'} key={content.id}>
                            <Link className={classes.link} to={content.link} smooth={true} offset={0} duration={900}>
                                <motion.p variants={TitleVariants} transition={TitleTransition} whileHover="whileHover">
                                    {content.content}
                                </motion.p>
                            </Link>
                        </div>
                    ))}
                </Grid>
            </Grid>
            <ParticlesBg type="cobweb" bg={true} color={theme.colors.blue} />
        </div>
    );
};

export default Title;
