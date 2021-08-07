import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { FreeVars, FreeVarsId } from '../../GraphQl/Types';
import { CREATE_FREETIP_MUTATION } from '../../GraphQl/createFreeTips';

const FreeTip = () => {
    const [postData, setPostData] = useState<FreeVars>({
        home: "", away: "", pick: ""

    });

    const [addBasic, { loading }] = useMutation<{ addBasic: FreeVarsId }>(CREATE_FREETIP_MUTATION, {
        update(_,) {

            setPostData({
                home: "", away: "", pick: ""
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
                            type="text"
                            style={{ backgroundColor: "#fcfcfc", }}
                            fullWidth
                            id="Fooball CLub Home  Free Tip"
                            label="Football Home Free Tip"
                            value={postData.home}
                            onChange={(e) => setPostData({ ...postData, home: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            type="text"

                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Fooball CLub Away  Free Tip"
                            label="Football Away Free Tip"
                            value={postData.away}
                            onChange={(e) => setPostData({ ...postData, away: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            type="number"

                            style={{ backgroundColor: "#fcfcfc", margin: "1em 0em 0em 0em" }}
                            fullWidth
                            id="Pick ?"
                            label="Pick ?"
                            required
                            value={postData.pick}
                            onChange={(e) => setPostData({ ...postData, pick: e.target.value })}
                        />
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Button type="submit" style={{ margin: "2em 0em 0em 0em" }} variant="contained" color="primary">
                            Submit FreeTip
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default FreeTip
