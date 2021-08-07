import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import { CREATE_GOLDEN_MUTATION } from '../../GraphQl/GoldenMutation';
import { BasicVarsId, BasicVars } from '../../GraphQl/Types';


const Goldentip = () => {
    const [postData, setPostData] = useState<BasicVars>({
        totalOdds: "", home: "", away: "", oddsToday: ""

    });

    const [addBasic, { loading }] = useMutation<{ addBasic: BasicVarsId }>(CREATE_GOLDEN_MUTATION, {
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
                            value={postData.totalOdds}
                            onChange={(e) => setPostData({ ...postData, totalOdds: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"

                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Home Golden "
                            label="Football Home Club Golden "
                            required
                            value={postData.home}
                            onChange={(e) => setPostData({ ...postData, home: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"

                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Football Club Away Golden "
                            label="Football Away Club Golden "
                            required
                            value={postData.away}
                            onChange={(e) => setPostData({ ...postData, away: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="number"

                            style={{ backgroundColor: "#fcfcfc", margin: "0em 0em 1em 0em" }}
                            fullWidth
                            id="Odds For the Game Golden Tip"
                            label="Odds for the Game GoldenTip"
                            required
                            value={postData.oddsToday}
                            onChange={(e) => setPostData({ ...postData, oddsToday: e.target.value })}
                        />
                    </Grid>

                    <Grid item container justify="center" xs={12}>
                        <Button type="submit" style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit Golden Type
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default Goldentip
