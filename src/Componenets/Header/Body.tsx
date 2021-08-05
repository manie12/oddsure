import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';

const Body = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid style={{ width: "90%", margin: " 2.5em 0em  0em 1.2em" }} container >
                <Grid container className={classes.grid__container} item xs={12}>
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
                        <Typography className={classes.typo__Free__tip}>
                            Pick - 1
                        </Typography>
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

export default Body
