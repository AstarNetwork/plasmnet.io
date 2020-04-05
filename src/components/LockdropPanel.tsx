import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BlogLinks } from '../database/links';
import BigNumber from 'bignumber.js';
import Web3Utils from 'web3-utils';
import moment, { Moment, duration } from 'moment';
import { LockTxArray } from '../types/types';
import { addComma } from '../utils/addComma';

interface TimeFormat {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface Props {
    startTime: Moment;
    endTime: Moment;
}

enum LockState {
    notStart,
    start,
    end,
}

const LockdropPanel: React.FC<Props> = ({ startTime, endTime }) => {
    const now = moment().utc();

    const calculateTimeLeft = (): TimeFormat => {
        const tillStart = moment(startTime).valueOf() - now.valueOf();

        //let difference = tillStart;
        let difference = duration(startTime.diff(now));

        // if the lockdrop has already started
        if (tillStart < 0) {
            difference = duration(endTime.diff(now));
        }

        let timeLeft: TimeFormat = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        const tillEnd = moment(endTime).valueOf() - now.valueOf();
        // check if the duration has ended
        if (tillEnd > 0) {
            timeLeft = {
                days: difference.days(),
                hours: difference.hours(),
                minutes: difference.minutes(),
                seconds: difference.seconds(),
            };
        }

        return timeLeft;
    };

    const getLockState = (): LockState => {
        const tillStart = moment(startTime).valueOf() - now.valueOf();
        if (tillStart > 0) {
            return LockState.notStart;
        } else if (tillStart <= 0 && !(moment(endTime).valueOf() - now.valueOf() < 0)) {
            return LockState.start;
        } else {
            return LockState.end;
        }
    };

    const [timeLeft, setTimeLeft] = useState<TimeFormat>(calculateTimeLeft());
    const [lockState, setLockState] = useState(getLockState());

    // update time value every second
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            setLockState(getLockState());
        }, 1000);
    });

    if (lockState !== LockState.end) {
        return (
            <>
                <PanelWrapper>
                    <Typography variant="h5">Lockdrop Information</Typography>
                    <br />
                    <div className="time">
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                {lockState === LockState.notStart ? (
                                    <Typography variant="h4" component="h2">
                                        Starting in:
                                    </Typography>
                                ) : (
                                    <Typography variant="h4" component="h2">
                                        Ending in:
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item>
                                <h3>{timeLeft.days}</h3>
                                <p>Days</p>
                            </Grid>
                            <Grid item>
                                <h3>{timeLeft.hours}</h3>
                                <p>Hours</p>
                            </Grid>
                            <Grid item>
                                <h3>{timeLeft.minutes}</h3>
                                <p>Minutes</p>
                            </Grid>
                            <Grid item>
                                <h3>{timeLeft.seconds}</h3>
                                <p>Seconds</p>
                            </Grid>
                        </Grid>
                    </div>
                </PanelWrapper>
            </>
        );
    } else {
        return (
            <>
                <PanelWrapper>
                    <Typography variant="h2" align="center">
                        Lockdrop has ended
                    </Typography>
                </PanelWrapper>
            </>
        );
    }
};

const PanelWrapper: React.FC = ({ children }) => {
    const useStyles = makeStyles(theme => ({
        paper: {
            backgroundColor: 'white',
            padding: theme.spacing(8, 2, 0),
            margin: theme.spacing(1),
        },
        lockedVal: {
            margin: theme.spacing(2, 0, 0),
        },
        btnPrimary: {
            margin: theme.spacing(5),
            backgroundColor: '#3498DB',
            color: 'white',
        },
    }));

    const [totalLockVal, setTotalLockVal] = useState<string>('---');
    const getLockValue = async (): Promise<void> => {
        const url =
            'https://api.etherscan.io/api?module=account&action=txlist&address=0x458dabf1eff8fcdfbf0896a6bd1f457c01e2ffd6&startblock=0&endblock=latest&sort=asc';

        try {
            const res = await fetch(url);
            const data = await res.json();
            const result: LockTxArray = data.result;
            let totalVal = new BigNumber(0);

            // Memo: forEach will occur `forEach Is Not a Function` error sometime
            for (let i = 0; i < result.length; i++) {
                const txVal = new BigNumber(result[i].value);
                totalVal = totalVal.plus(txVal);
            }

            // Memo: Recursion
            if (totalVal.s !== null) {
                setTotalLockVal(
                    addComma(
                        new BigNumber(Web3Utils.fromWei(totalVal.toFixed(), 'ether')).decimalPlaces(1).toFixed(),
                        1,
                    ),
                );
            } else {
                getLockValue();
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getLockValue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     fetch(
    //         'https://api.etherscan.io/api?module=account&action=txlist&address=0x458dabf1eff8fcdfbf0896a6bd1f457c01e2ffd6&startblock=0&endblock=latest&sort=asc',
    //     )
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             let totalVal = new BigNumber(0);
    //             responseJson.result.forEach((tx: any) => {
    //                 const txVal = new BigNumber(tx.value);
    //                 totalVal = totalVal.plus(txVal);
    //             });
    //             setTotalLockVal(
    //                 addComma(
    //                     new BigNumber(Web3Utils.fromWei(totalVal.toFixed(), 'ether')).decimalPlaces(1).toFixed(), 1),
    //             );
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg">
                <Paper elevation={5} className={classes.paper}>
                    {children}
                    <Typography variant="h5" className={classes.lockedVal}>
                        Total Lock Value is around {totalLockVal} ETH
                    </Typography>

                    <a href={BlogLinks.lockdropIntroduction}>
                        <Button variant="contained" size="large" className={classes.btnPrimary}>
                            What is the Lockdrop?
                        </Button>
                    </a>
                </Paper>
            </Container>
        </>
    );
};

export default LockdropPanel;
