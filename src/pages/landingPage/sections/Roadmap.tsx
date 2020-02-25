import React from 'react';
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

const Roadmap: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id="roadmap-section">
            <Container maxWidth="sm">
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Our development timeline
                </Typography>
            </Container>

            <Container className={classes.timeline} maxWidth="md">
                <TimelineVerticle data={roadmapData} backgroundColor="rgb(33, 150, 243)" />
            </Container>
        </div>
    );
};

export default Roadmap;
