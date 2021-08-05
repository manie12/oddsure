import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';
import ball from '../../Image/ball.gif';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Previouis = () => {
    const classes = useStyles();
    const history = useHistory()
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
                <Grid item xs={12}>
                    <Accordion className={classes.accordion__container} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.expand__icon}
                            />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}> Match History on Thursdat 04 August 2021</Typography>
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
                                    <Typography>Melbourne vs Sydney</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>HT/FT 2/2</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>Won</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Melbourne vs Sydney</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>HT/FT 2/2</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>Won</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Melbourne vs Sydney</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>HT/FT 2/2</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>Won</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Melbourne vs Sydney</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>HT/FT 2/2</Typography>
                                </Grid>
                                <Grid item container justify="flex-end" xs={3}>
                                    <Typography>Won</Typography>
                                </Grid>
                            </Grid>

                        </AccordionDetails>
                    </Accordion>

                </Grid>
            </Grid>
        </div >
    )
}

export default Previouis
