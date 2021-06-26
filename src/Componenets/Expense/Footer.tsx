import React, { useState } from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useStyles } from './Styles';
import Income from './Income';
import ExpenseTtack from './ExpenseTtack';

export type Props = {
    open1: boolean,
    setOpen1: (open1: boolean) => void
}
export type Prop = {
    open: boolean,
    setOpen: (open: boolean) => void
}


const Footer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [value, setValue] = React.useState(0);
    const handleOpen = () => {

        setOpen(true);
    };
    const handleOpen2 = () => {

        setOpen1(true);
    };

    return (
        <div>
            <AppBar className={classes.appBar}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}

                >
                    <BottomNavigationAction label="Expense" icon={<MonetizationOnIcon onClick={() => handleOpen()} className={classes.BottomNavigation} />} />
                    <BottomNavigationAction label="Expense" icon={<MonetizationOnIcon onClick={() => handleOpen2()} className={classes.BottomNavigation} />} />

                    <Income open={open} setOpen={setOpen} />
                    <ExpenseTtack open1={open1} setOpen1={setOpen1} />
                </BottomNavigation>

            </AppBar>
        </div >
    )
}

export default Footer
