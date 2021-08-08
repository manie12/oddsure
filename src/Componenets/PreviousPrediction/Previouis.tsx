import React from 'react';
import { useQuery } from '@apollo/client';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import { useStyles } from './Styles';
import ball from '../../Image/ball.gif';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FETCH_PREVIOUS } from '../../GraphQl/FetchPrevious';
import { PreviousData } from '../../GraphQl/Types';
const Previouis = () => {
    const classes = useStyles();
    const history = useHistory();
    const { loading, data } = useQuery<PreviousData>(FETCH_PREVIOUS);
    if (loading) {
        return <Grid container>
            <Grid justify="center" alignItems="center" container item xs={12}>
                <CircularProgress />
            </Grid>
        </Grid>

    }


    return (
        <div>
            <Grid container >
                <Grid item container xs={12} justify="center" className={classes.grid__oddsure}>
                    <Typography className={classes.oddsure}>
                        SPORTPESASURETIPS
                    </Typography>
                </Grid>
                <Grid xs={12} justify="center" className={classes.grid__sure_tips}>
                    <Typography>
                        SURE TIPS
                    </Typography>
                </Grid>
                <Grid container justify="center" item xs={6}>
                    <img className={classes.image__ball} src={ball} alt="ball" />
                    <Typography onClick={() => history.push("/")} className={classes.predictions}>
                        Today's Prediction
                    </Typography>
                </Grid>
                <Grid container justify="center" item xs={6} style={{ backgroundColor: "#03386F" }} >
                    <img className={classes.image__ball} src={ball} alt="ball" />

                    <Typography className={classes.predictions}>
                        Previous Prediction
                    </Typography>
                </Grid>
                {
                    data?.getPreviouis && data?.getPreviouis?.map((p, index) => (
                        index <= 9 ?

                            <Grid item xs={12}>
                                <Accordion className={classes.accordion__container} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon className={classes.expand__icon}
                                        />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}> Match History on {moment(p?.date).format("MM/DD/YYYY")}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.opened__accordion}>
                                        <Grid container item xs={12}>
                                            <Grid item xs={6}>
                                                <Typography className={classes.status__bar}>Match</Typography>
                                            </Grid>
                                            <Grid item container justify="center" xs={3}>
                                                <Typography className={classes.status__bar}>Tip</Typography>
                                            </Grid>
                                            <Grid item container justify="flex-end" xs={3}>
                                                <Typography className={classes.status__bar}>Status</Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>{p?.home} vs {p?.away}</Typography>
                                            </Grid>
                                            <Grid item container justify="flex-end" xs={3}>
                                                <Typography>{p?.gameType}</Typography>
                                            </Grid>
                                            <Grid item container justify="flex-end" xs={3}>
                                                <Typography>Won</Typography>
                                            </Grid>

                                        </Grid>

                                    </AccordionDetails>
                                </Accordion>



                            </Grid>
                            : null
                    ))
                }

            </Grid>
        </div >
    )
}

export default Previouis
