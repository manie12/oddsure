import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    typoText: {
        textAlign: 'center'
    },
    container: {
        marginTop: '5em',
        borderBottom: ' solid 2px'
    },
    balanceText: {
        fontWeight: 800,
        fontSize: '2em'
    },
    containerExpense: {
        marginTop: '1.3em',
    },
    expense: {
        fontSize: '1.2em',
        fontWeight: 600
    },
    paper: {
        padding: '1em 0em'
    },
    root: {
        width: "100%",
        padding: '1.5em 0em',

    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    BottomNavigation: {
        fontSize: '4em',

    },
    bottomNav: {
        margin: 'auto',

    }
}))