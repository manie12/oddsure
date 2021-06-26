import React from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useStyles } from './Styles';
const Footer = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

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
                    <BottomNavigationAction label="Expense" icon={<MonetizationOnIcon className={classes.BottomNavigation} />} />
                    <BottomNavigationAction label="Expense" icon={<MonetizationOnIcon className={classes.BottomNavigation} />} />


                </BottomNavigation>

            </AppBar>
        </div >
    )
}

export default Footer
