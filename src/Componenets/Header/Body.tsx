import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Styles';
import { FETCH_FREETIP } from '../../GraphQl/FetchFreeTips';
import { FreeData, FreeVarsId } from '../../GraphQl/Types';
import moment from 'moment';

// interface freeData {
//     data: FreeVarsId
// }

const Body = () => {
    // const [post, setPost] = useState([])
    const { loading, data } = useQuery<FreeData>(FETCH_FREETIP);
    console.log(DataView)

    const classes = useStyles();

    // useEffect(() => {
    //     const subscribe = () => {
    //         if (data) {
    //             //const dataType = data
    //             setPost(data)
    //             console.log(data)

    //         }
    //     }
    //     return subscribe;
    // }, [data])


    if (loading) {
        return <p>loading</p>
    }
    if (!data) {
        return <p>No Games Now</p>
    }
    return (

        <div>
            <Grid style={{ width: "90%", margin: " 2.5em 0em  0em 1.2em" }} container >

                {
                    data.getFreeTip.length === 1 && data.getFreeTip?.map(p => (
                        <Grid container className={classes.grid__container} item xs={12}>
                            <Grid item xs={12}>
                                <Typography className={classes.typo__Free__tip}>
                                    Free Tip of the Day
                                </Typography>
                            </Grid>


                            <Grid item xs={12}>


                                <Typography className={classes.typo__game__tip}>
                                    {moment(p?.createdAt).format("MM/DD/YYYY")}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.typo__game__tip}>
                                    {p?.home} {p?.away}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.typo__Free__tip}>
                                    Pick - {p?.pick}
                                </Typography>
                            </Grid>

                        </Grid>

                    ))
                }


                <Grid container justify="center" className={classes.grid__mpesa} item xs={12}>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa}>
                            LIPA NA M-PESA
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa1}>
                            Till  Number
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.lipa__mpesa1}>
                            5289545
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}

export default Body
