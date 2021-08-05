import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useStyles } from './Styles';
import ball from '../../Image/ball.gif'
const GoldenTip = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid style={{ width: "100%", margin: " 2em 0em  0em 1.8em" }} container >
                <Grid container className={classes.grid__container1} item xs={12}>
                    <Grid item xs={12}>

                        <Typography className={classes.typo__Free__tip}>
                            Free Tip of the Day
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.typo__game__tip}>
                            Wednesday 04/08/2021
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.typo__game__tip}>
                            Angelhorms vs Astrio
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.ft__ht}>
                            Get sure Draws, CS, HT/FT,FIXED TIPS
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.ft__ht}>
                            Today’s Golden: 232.45+ Odds
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
                            Melbournhfgkfddfsdg vs sydney
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography style={{ fontSize: ".6em", color: "#00B13C" }} >
                            100 coreect score
                        </Typography>
                    </Grid>
                    <Grid item container justify="center" xs={4} style={{ color: "#fcfcfc" }}>
                        <Typography>
                            4.56
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

                    <Grid item xs={12}>
                        <Typography style={{ color: "#fcfcfc", fontSize: "0.8em" }}>
                            Melbournhfgkfddfsdg vs sydney
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: "0.6em", color: "#00B13C" }} >
                            100 coreect score
                        </Typography>
                    </Grid>
                    <Grid item xs={4} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            4.56
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            ---
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ color: "#fcfcfc" }} >
                        <img className={classes.image__ball} alt="ball" src={ball} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "#fcfcfc", fontSize: "0.8em" }}>
                            Melbournhfgkfddfsdg vs sydney
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography style={{ fontSize: "0.6em", color: "#00B13C" }} >
                            100 coreect score
                        </Typography>
                    </Grid>
                    <Grid item xs={4} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            4.56
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            ---
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ color: "#fcfcfc" }}>
                        <img className={classes.image__ball} alt="ball" src={ball} />

                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "#fcfcfc", fontSize: "0.8em" }}>
                            Melbournhfgkfddfsdg vs sydney
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: "0.6em", color: "#00B13C" }} >
                            100 coreect score
                        </Typography>
                    </Grid>
                    <Grid item xs={4} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            4.56
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            ---
                        </Typography>
                    </Grid>

                    <Grid item xs={1} style={{ color: "#fcfcfc" }} >
                        <img className={classes.image__ball} alt="ball" src={ball} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "#fcfcfc", fontSize: "0.8em" }}>
                            Melbournhfgkfddfsdg vs sydney
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography style={{ fontSize: "0.6em", color: "#00B13C" }} >
                            100 coreect score
                        </Typography>
                    </Grid>
                    <Grid item xs={4} justify="center" style={{ color: "#fcfcfc" }}>
                        <Typography>
                            4.56
                        </Typography>
                    </Grid>
                    <Grid item xs={3} justify="center" container style={{ color: "#fcfcfc" }}>
                        <Typography>
                            ---
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ color: "#fcfcfc" }} >
                        <img className={classes.image__ball} alt="ball" src={ball} />
                    </Grid>

                </Grid>


            </Grid>

        </div >
    )
}

export default GoldenTip
