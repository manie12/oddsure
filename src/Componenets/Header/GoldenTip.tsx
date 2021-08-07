import React from 'react';
import { useStyles } from './Styles';
import { useQuery } from '@apollo/client';
import { Grid, Typography, Button } from '@material-ui/core';
import ball from '../../Image/ball.gif';
import { GoldenData, FreeVarsId } from '../../GraphQl/Types';
import moment from 'moment';
import { FETCH_GOLDEN } from '../../GraphQl/FetchGoldenTips';

const GoldenTip = () => {
    const classes = useStyles();
    const { loading, data } = useQuery<GoldenData>(FETCH_GOLDEN);

    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div>
            <Grid style={{ width: "100%", margin: " 2em 0em  0em 1.8em" }} container >
                {
                    data?.getGoldenTip.map(p => (
                        <Grid container className={classes.grid__container1} item xs={12}>
                            <Grid item xs={12}>

                                <Typography className={classes.typo__Free__tip}>
                                    Golden Tip of the Day
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <Typography className={classes.typo__game__tip}>
                                    {moment(p?.createdAt).format("MM/DD/YYYY")}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <Typography className={classes.typo__game__tip}>
                                    The Goldein Way
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <Typography className={classes.ft__ht}>
                                    Get sure Draws, CS, HT/FT,FIXED TIPS
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <Typography className={classes.ft__ht}>
                                    Today’s Golden: {p.totalOdds}+ Odds
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography className={classes.ft__ht}>
                                    5 Games
                                </Typography>
                            </Grid>
                            <Grid item container justify="flex-end" xs={6}>
                                <Button className={classes.ft__ht1} variant="contained" color="primary">
                                    Pay Here
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography style={{ fontSize: "1em" }} className={classes.typo__Free__tip}>
                                    Match
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" xs={4}>
                                <Typography style={{ fontSize: "1em" }} className={classes.typo__Free__tip}>
                                    Odds
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" xs={4}>
                                <Typography style={{ fontSize: "1em" }} className={classes.typo__Free__tip}>
                                    Tips
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography style={{ color: "#fcfcfc", fontSize: "0.8em" }}>
                                    {p?.home} vs {p?.away}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>

                                <Typography style={{ fontSize: ".6em", color: "#00B13C" }} >
                                    100 coreect score
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" xs={4} style={{ color: "#fcfcfc" }}>
                                <Typography>
                                    {p?.oddsToday}
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" xs={3} style={{ color: "#fcfcfc" }}>
                                <Typography>
                                    ---
                                </Typography>
                            </Grid>
                            <Grid item container justify="flex-end" xs={1} style={{ color: "#fcfcfc" }} >
                                <img className={classes.image__ball} alt="ball" src={ball} />
                            </Grid>


                        </Grid>

                    ))
                }


            </Grid>


        </div >
    )
}

export default GoldenTip
