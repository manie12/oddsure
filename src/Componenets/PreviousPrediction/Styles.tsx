import { makeStyles } from '@material-ui/core';
import banner from '../../Image/banner.gif';
export const useStyles = makeStyles((theme) => ({
    oddsure: {
        fontSize: "2.25em",
        margin: "0.3em 0em 0em 0em",
        fontWeight: 800,
        color: "#fcfcfc",

    },
    grid__oddsure: {
        backgroundColor: "#0E2A47"
    },
    grid__sure_tips: {
        height: "3.125em",
        backgroundImage: `url(${banner})`,
        objectFit: "contain",
        backgroundSize: "cover",
        width: "100%",
        padding: "1em 0em 0em 1em",
        margin: "1em 0em 0em 0em"
    },
    image__ball: {
        height: "1.68em",
        width: "1.68em"
    },
    predictions: {
        width: "100%",
        margin: " 0em 0em 0em 2.2em",
        color: "#fcfcfc",
        fontWeight: 600,
        letterSpacing: "0.05em"
    },
    tips__grid: {
        margin: ".1em",
        backgroundColor: "#03386F"
    },
    typo__vip: {
        color: "#fcfcfc",
        fontSize: ".8em"
    },
    grid__container: {
        height: "12.9em",
        width: "20em",
        backgroundColor: "#03386F",
        borderRadius: "2em",
        padding: "1em 2em"
    },
    typo__Free__tip: {
        color: "#00B13C",
        fontSize: "1.12em",
        letterSpacing: "0.05em",
        fontWeight: 800

    },
    typo__game__tip: {
        color: "#fcfcfc",
        fontSize: "1.12em",
        letterSpacing: "0.05em",
        fontWeight: 800

    },
    grid__mpesa: {
        height: "8.1em",
        width: '20em',
        backgroundColor: "#03386F",
        margin: "3em 0em 0em 0em",
        borderRadius: "2em",
        padding: "1em 0em 0em 6.5em"
    },
    lipa__mpesa: {
        color: "#00B13C",
        fontWeight: 800,
        fontSize: "1.11em"
    },
    lipa__mpesa1: {
        color: "#fcfcfc",
        fontWeight: 800,
        fontSize: "1.11em",
        margin: "0em 0em 0em 1.5em"
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    status__bar: {
        color: "#00B13C",
        fontWeight: 700
    },
    accordion__container: {
        backgroundColor: "#03386F",
        color: "#fcfcfc",
        margin: ".6em 0em 0em 0em"
    },
    expand__icon: {
        color: "#fcfcfc"
    },
    opened__accordion: {
        backgroundColor: "#0E2A47",
        color: "#fcfcfc"
    }

}))