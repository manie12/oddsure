import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './Styles';
import { Paper, Grid, Typography, TextField } from '@material-ui/core';
import { Prop } from './Footer';

const Income: React.FC<Prop> = ({ open, setOpen }) => {
    const classes = useStyles();


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div  >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <form className={classes.paper}>
                        <TextField
                            id=""
                            label="Enter an Amount"
                            fullWidth
                            type="number"

                            className={classes.textField}
                        />
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.handleModal}>
                                    <Typography>Food</Typography>
                                </Paper>
                            </Grid>
                        </Grid>

                    </form>
                </Fade>
            </Modal>

        </div>
    )
}

export default Income
