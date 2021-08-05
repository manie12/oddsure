import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';

const FreeTip = () => {
    return (
        <div>
            <form style={{ margin: "6em 0em 0em 0em" }}>

                <Grid container>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", }}
                            fullWidth
                            id="Post Games"
                            label="Post Games"

                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Stake Type"
                            label="Stake Type"

                        />
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Button style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit previous Games
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default FreeTip
