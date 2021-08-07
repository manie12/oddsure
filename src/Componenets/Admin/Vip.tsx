import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import { CREATE_VIP_MUTATION } from '../../GraphQl/VipMutation';
import { BasicVarsId, BasicVars } from '../../GraphQl/Types';


const Vip = () => {
    const [postData, setPostData] = useState<BasicVars>({
        totalOdds: "", home: "", away: "", oddsToday: ""

    });

    const [addBasic, { loading }] = useMutation<{ addBasic: BasicVarsId }>(CREATE_VIP_MUTATION, {
        update(_,) {

            setPostData({
                totalOdds: "", home: "", away: "", oddsToday: ""
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
            <form onSubmit={handleSubmit} style={{ margin: "6em 0em 0em 0em" }}>

                <Grid container>
                    <Grid item xs={12}>

                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em " }}
                            fullWidth
                            id="Total Odds for today"
                            label="Total Odds for today"
                            type="number"
                            required
                            value={postData.totalOdds}
                            onChange={(e) => setPostData({ ...postData, totalOdds: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Home Vip"
                            label="Football Club Home Vip"
                            required
                            type="text"

                            value={postData.home}
                            onChange={(e) => setPostData({ ...postData, home: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Away Vip"
                            label="Football Club Away Vip"
                            required
                            type="text"

                            value={postData.away}
                            onChange={(e) => setPostData({ ...postData, away: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Odds For the Game Vip"
                            label="Odds for the Game Vip"
                            required
                            type="number"

                            value={postData.oddsToday}
                            onChange={(e) => setPostData({ ...postData, oddsToday: e.target.value })}
                        />
                    </Grid>

                    <Grid item container justify="center" xs={12}>
                        <Button type="submit" style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit Vip Type
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default Vip
