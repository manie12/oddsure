import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';


const Basictip = () => {
    return (
        <div>
            <form style={{ margin: "6em 0em 0em 0em" }}>

                <Grid container>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em " }}
                            fullWidth
                            id="Total Odds for today"
                            label="Total Odds for today"
                            type="number"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Home Basic"
                            label="Football Home Club Basic"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Away Basic"
                            label="Football Away Club Basic"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Odds For the Game Basic"
                            label="Odds for the Game Basic"
                            required
                        />
                    </Grid>

                    <Grid item container justify="center" xs={12}>
                        <Button style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit Basic Type
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default Basictip
