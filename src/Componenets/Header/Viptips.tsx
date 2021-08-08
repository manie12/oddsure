import React from 'react'
import { useStyles } from './Styles';
import { useQuery } from '@apollo/client';
import { Grid, Typography, Button, CircularProgress, Fade, Backdrop, Modal } from '@material-ui/core';
import ball from '../../Image/ball.gif';
import { VipData, FreeVarsId } from '../../GraphQl/Types';
import moment from 'moment';
import { FETCH_VIP } from '../../GraphQl/FetchVip';

const Viptips = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const { loading, data } = useQuery<VipData>(FETCH_VIP);

    if (loading) {
        return <Grid container>
            <Grid justify="center" alignItems="center" container item xs={12}>
                <CircularProgress />
            </Grid>
        </Grid>

    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Golden Tips Price  </h2>
                        <h2 style={{ color: "#00B13C" }} id="transition-modal-title">LIPA NA M-PESA</h2>
                        <h2 style={{ color: "#00B13C" }} id="transition-modal-title">ENTER TILL NO. 5289545</h2>
                        <p id="transition-modal-description">You'll receive game automatically via sms</p>
                        <p id="transition-modal-description">Start Winning</p>
                    </div>
                </Fade>
            </Modal>
            <Grid style={{ width: "100%", margin: " 2em 0em  0em 1.8em" }} container >

                <Grid container className={classes.grid__container1} item xs={12}>
                    <Grid item xs={12}>

                        <Typography className={classes.typo__Free__tip}>
                            VIP Tips of the Day
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        {
                            data?.getVipTip?.map((p, index) => (
                                index <= 0 ?
                                    < Typography className={classes.typo__game__tip} >
                                        {moment(p?.createdAt).format("MM/DD/YYYY")}
                                    </Typography>
                                    : null
                            ))
                        }

                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.typo__game__tip}>
                            The VIP Way
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Typography className={classes.ft__ht}>
                            Get sure Draws, CS, HT/FT,FIXED TIPS
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        {
                            data?.getVipTip?.map((p, index) => (
                                index <= 0 ?
                                    <Typography className={classes.ft__ht}>
                                        Today’s Golden: {p.totalOdds}+ Odds
                                    </Typography>
                                    : null
                            ))
                        }

                    </Grid>

                    <Grid item xs={6}>
                        <Typography className={classes.ft__ht}>
                            5 Games
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end" xs={6}>
                        <Button onClick={handleOpen} className={classes.ft__ht1} variant="contained" color="primary">
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
                    {
                        data?.getVipTip.map((p, index) => (
                            index <= 4 ?
                                <Grid container item xs={12}>


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
                                : null
                        ))
                    }
                </Grid>


            </Grid>


        </div >
    )
}

export default Viptips
