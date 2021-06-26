import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import { useStyles } from './Styles';
const Body = () => {
    const classes = useStyles();

    return (
        <div>

            <AppBar className={classes.typoText} position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        EXPENSE TRACKER APP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container className={classes.container} >
                <Grid item xs={12}>
                    <Typography className={classes.balanceText}>TOTAL BALANCE</Typography>
                </Grid>
                <Grid className={classes.balanceText} item xs={12}>
                    $3456
                </Grid>
            </Grid>
            <Paper className={classes.paper}>
                <Grid container className={classes.containerExpense} >
                    <Grid item xs={9}>

                        <Typography className={classes.expense}>Food</Typography>

                    </Grid>
                    <Grid item xs={3}>

                        <Typography className={classes.expense}>$3445</Typography>

                    </Grid>
                </Grid>

            </Paper>
        </div>


    )
}

export default Body
