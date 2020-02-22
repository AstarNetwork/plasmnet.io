import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import coNect from '../../../resources/co-nect.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardRoot: {
            display: 'flex',
            maxWidth: 345,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        media: {
            width: 151,
        },
        playIcon: {
            height: 38,
            width: 38,
        },
        heroContent: {
            padding: theme.spacing(8, 0, 6),
        }
    }),
);

interface Props { }

const AboutToken: React.FC<Props> = () => {
    const classes = useStyles();
    //const theme = useTheme();

    return (
        <div className='section'>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Card className={classes.cardRoot}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Co-Nect the company
                            </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Mac Miller
                            </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.media}
                            image={coNect}
                        />
                    </Card>
                </Container>
            </div>
        </div>

    );
}

export default AboutToken;