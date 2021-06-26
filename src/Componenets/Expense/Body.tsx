import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Body = () => {
    return (
        <div>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        EXPENSE TRACKER APP
                    </Typography>
                </Toolbar>
            </AppBar>


        </div>
    )
}

export default Body
