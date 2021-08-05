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
                            id="Fooball CLub Home  Free Tip"
                            label="Football Home Free Tip"

                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Fooball CLub Away  Free Tip"
                            label="Football Away Free Tip"

                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Pick ?"
                            label="Pick ?"

                        />
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Button style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit FreeTip
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default FreeTip
