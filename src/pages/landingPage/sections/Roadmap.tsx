import React from 'react';
//import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TimelineVerticle from '../../../components/TimelineVertical';
import { RoadmapItems } from '../../../database/roadmapItems';

const roadmapData = RoadmapItems;

const useStyles = makeStyles(theme => ({
    heroContent: {
        //backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        background: '#47BCFF',
    },
    timeline: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

interface Props { }

const Roadmap: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className='section'>
            <CssBaseline />
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography component='h3' variant='h3' align='center' color='textPrimary' gutterBottom>
                        Our development timeline
                    </Typography>
                </Container>

                <Container className={classes.timeline} maxWidth='md'>
                    <TimelineVerticle data={roadmapData} />
                </Container>
            </div>
        </div>
    );
}

export default Roadmap;