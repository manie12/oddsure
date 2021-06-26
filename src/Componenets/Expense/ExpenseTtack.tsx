import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Fade, Grid, Paper, Typography, TextField } from '@material-ui/core';
import { useStyles } from './Styles';
type Props = {
    open1: boolean,
    setOpen1: (open: boolean) => void
}

const ExpenseTtack: React.FC<Props> = ({ open1, setOpen1 }) => {
    const classes = useStyles();


    const handleClose2 = () => {
        setOpen1(false);
    };


    return (
        <div >
            <Modal
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open1}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open1}>
                    <div className={classes.paper}>
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
                        </Grid>.
                    </div >
                </Fade >
            </Modal >

        </div >
    )
}

export default ExpenseTtack
