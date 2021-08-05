import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';
import ball from '../../Image/ball.gif';
import Body from './Body';
import GoldenTip from './GoldenTip';
import Basictip from './Basictip';
import Viptips from './Viptips';
import Jackpot from './Jackpot';

const Header = () => {
    const [show, setShow] = useState<string>("freetip");
    const classes = useStyles();
    const history = useHistory();
    return (

        <div>

            <Grid container >
                <Grid item container xs={12} justify="center" className={classes.grid__oddsure}>
                    <Typography className={classes.oddsure}>
                        ODDSURE
                    </Typography>
                </Grid>
                <Grid xs={12} justify="center" className={classes.grid__sure_tips}>
                    <Typography>
                        SURE TIPS
                    </Typography>
                </Grid>
                <Grid container justify="center" item xs={6} style={{ backgroundColor: "#03386F" }}>
                    <img className={classes.image__ball} src={ball} alt="ball" />
                    <Typography className={classes.predictions}>
                        Today's Prediction
                    </Typography>
                </Grid>
                <Grid container justify="center" item xs={6}>
                    <img className={classes.image__ball} src={ball} alt="ball" />

                    <Typography onClick={() => history.push("/previous")} className={classes.predictions}>
                        Previous Prediction
                    </Typography>
                </Grid>
                <Grid item spacing={1} container xs={12} className={classes.tips__grid}>
                    <Grid item xs={2}>
                        <Typography onClick={() => setShow("freetip")} className={classes.typo__vip}>
                            Free Tip
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography onClick={() => setShow("goldentip")} className={classes.typo__vip}>
                            Golden Tips
                        </Typography>

                    </Grid>
                    <Grid item xs={2}>
                        <Typography onClick={() => setShow("basictip")} className={classes.typo__vip}>
                            Basic Tips
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography onClick={() => setShow("viptip")} className={classes.typo__vip}>
                            Vips Tips
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end" xs={3}>
                        <Typography onClick={() => setShow("jackpot")} className={classes.typo__vip}>
                            Betika/Mozzart
                            Jackpots Tips
                        </Typography>
                    </Grid>
                </Grid>
                {
                    show === "freetip" && (
                        <Body />

                    )
                }
                {
                    show === "goldentip" && (
                        <GoldenTip />

                    )
                }
                {
                    show === "basictip" && (
                        <Basictip />

                    )
                }
                {
                    show === "viptip" && (
                        <Viptips />

                    )
                }
                {
                    show === "jackpot" && (
                        <Jackpot />

                    )
                }



            </Grid>
        </div>
    )
}

export default Header
