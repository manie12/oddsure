import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';
const Jackpot = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center"  >
                <Grid item container xs={12} justify="center" style={{ margin: "2em", color: "#fcfcfc" }}>
                    <Grid item container justify="center" xs={12}>
                        <Typography style={{ fontWeight: 800 }}>ACTIVE</Typography>
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Typography>MOZZART / SPORTPESA & BETIKA JACKPOTS</Typography>
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Typography style={{ color: "#fcfcfc", fontWeight: 600 }}>  Daily JP</Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" className={classes.grid__mpesa} item xs={12}>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa}>
                            LIPA NA M-PESA
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa1}>
                            Till  Number
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa1}>
                            5289545
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>



        </div >
    )
}

export default Jackpot
