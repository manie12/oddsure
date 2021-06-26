import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core';
import { useStyles } from './Styles';
const Sign = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleSubmit = () => {
        history.push("/")
    }

    return (
        <div className={classes.sideWall}>
            <form >
                <Typography className={classes.signupText}>Sign Up</Typography>
                <TextField
                    id=""
                    label="username"
                    fullWidth
                    className={classes.textField}
                />
                <TextField
                    id=""
                    label="email"
                    fullWidth
                    className={classes.textField}

                />
                <TextField
                    id=""
                    label="password"
                    fullWidth
                    className={classes.textField}

                />
                <TextField
                    id=""
                    label="confirmpassword"
                    fullWidth
                    className={classes.textField}

                />
                <Button onClick={() => handleSubmit()} className={classes.textField} variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Sign
