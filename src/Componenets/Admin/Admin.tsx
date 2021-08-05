import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useStyles } from './Styles';
import FreeTip from './FreeTip';
import Goldentip from './Goldentip';
import Vip from './Vip';
import Basictip from './Basictip';
import Date from './Date';
const Admin = () => {
    const classes = useStyles();
    const [show, setShow] = useState<string>("freetip");
    return (

        <div>
            <Grid container alignItems="center">
                <Grid className={classes.button} item xs={6}>
                    <Button onClick={() => setShow("freetip")} fullWidth variant="contained" color="secondary">
                        FreeTip
                    </Button>
                </Grid>
                <Grid className={classes.button} item xs={6}>
                    <Button onClick={() => setShow("golden")} fullWidth variant="contained" color="secondary">
                        GoldenTip
                    </Button>
                </Grid>
                <Grid className={classes.button} item xs={6}>
                    <Button onClick={() => setShow("basic")} fullWidth variant="contained" color="secondary">
                        Basic Tip
                    </Button>
                </Grid>
                <Grid className={classes.button} item xs={6}>
                    <Button onClick={() => setShow("vip")} fullWidth variant="contained" color="secondary">
                        Vip Tip
                    </Button>
                </Grid>
                <Grid className={classes.button} item xs={6}>
                    <Button onClick={() => setShow("date")} fullWidth variant="contained" color="secondary">
                        Vip Tip
                    </Button>
                </Grid>


            </Grid>
            {show === "freetip" && (
                <FreeTip />

            )
            }
            {
                show === "golden" && (
                    <Goldentip />

                )
            }
            {
                show === "basic" && (
                    <Basictip />

                )
            }
            {
                show === "vip" && (
                    <Vip />

                )
            }
            {
                show === "date" && (
                    <Date />

                )
            }
        </div>
    )
}

export default Admin
