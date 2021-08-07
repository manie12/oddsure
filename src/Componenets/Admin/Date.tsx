import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { PreviousVars, PreviousVarsId } from '../../GraphQl/Types';
import { CREATE_PREVIOUS_MUTATION } from '../../GraphQl/PreviousMutation';

const FreeTip = () => {
    const [postData, setPostData] = useState<PreviousVars>({
        date: "", home: "", away: "", gameType: ""

    });

    const [addBasic, { loading }] = useMutation<{ addBasic: PreviousVarsId }>(CREATE_PREVIOUS_MUTATION, {
        update(_,) {

            setPostData({
                date: "", home: "", away: "", gameType: ""
            })
        },
        variables: postData
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        addBasic()


    }
    return (
        <div>
            <form onClick={handleSubmit} style={{ margin: "6em 0em 0em 0em" }}>

                <Grid container>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", }}
                            fullWidth
                            type="text"
                            id="Date of  Game"
                            label="date of Game"
                            value={postData.date}
                            onChange={(e) => setPostData({ ...postData, date: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            type="text"
                            style={{ backgroundColor: "#fcfcfc", }}
                            fullWidth
                            id="Home Game"
                            label="Home Game"
                            value={postData.home}
                            onChange={(e) => setPostData({ ...postData, home: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            type="text"
                            style={{ backgroundColor: "#fcfcfc", }}
                            fullWidth
                            id="Away Game"
                            label="Away Game"
                            value={postData.away}
                            onChange={(e) => setPostData({ ...postData, away: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            type="text"
                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Stake  type"
                            label="Stake Type"
                            value={postData.gameType}
                            onChange={(e) => setPostData({ ...postData, gameType: e.target.value })}
                        />
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Button type="submit" style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit previous Games
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default FreeTip
