import React from "react";
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactFontFace from 'react-font-face'
import wickedGrit from './assets/WickedGrit.ttf'
import bridge from "../images/bridge.jpg";

const useStyles = makeStyles(theme => ({
    major: {
        color: "white",
        textAlign: "center",
        width: "100%",
        padding: "1em",
        marginBottom: 0,
        marginTop: 0,
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        margin: 0,
        zIndex: -1,
    },
    text: {
        padding: "2%",
        width: "45%",
        background: "transparent",
        color: "white",
        fontSize: "1.5em",
        textAlign: "right",
    },
    mobileText: {
        padding: "2%",
        width: "90%",
        background: "transparent",
        color: "white",
        fontSize: "1.5em",
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        marginBottom: "10%",
        // backgroundImage: "linear-gradient(315deg, rgba(177, 191, 216, 1) 0%, rgba(13, 79, 139, 1) 74%)",
        backgroundColor: "rgba(13, 79, 139, .7)",
        zIndex: 1000,
        // boxShadow: "inset 0 0 0 1000px rgba(13, 79, 139, .5)"
    },
    header: {
        color: "white",
        fontFamily: 'wickedGrit',
        fontSize: "3.5em",
        position: "absolute",
        left: "5%",
        top: "1vw"
    },
    mobileHeader: {
        color: "white",
        fontFamily: 'wickedGrit',
        fontSize: "3.5em",
        position: "absolute",
        left: "10%",
        top: "1.5vw",
    },
    headerImage1: {
        borderLeft: "2px solid white",
        position: "absolute",
        top: 0,
        left: 0,
        height: "120px",
        width: "100px",
        borderRadius: "50%",
        transform: "rotate(15deg)"

    },
    headerImage2: {
        borderLeft: "2px solid white",
        position: "absolute",
        top: 0,
        left: 0,
        height: "120px",
        width: "100px",
        borderRadius: "50%",
        transform: "rotate(55deg)"
    },
    headerImage3: {
        borderLeft: "2px solid white",
        position: "absolute",
        top: 0,
        left: 0,
        height: "120px",
        width: "100px",
        borderRadius: "50%",
        transform: "rotate(35deg)"
    },
    headerContainer: {
        position: "relative",
        width: "60%",
        height: "20%",
        marginTop: "5%",
    },
    mobileHeaderContainer: {
        position: "relative",
        width: "400px",
        height: "20%",
        margin: "auto",
        marginTop: "25%",
        marginBottom: 0
    },
    majorContainer: {
        width: "45%"
    },
    majorText: {
        color: 'white',
        fontSize: "2em",
        textAlign: "right",
        margin: 0
    },
    mobileMajorContainer: {
        width: "80%",
    },
    mobileMajorText: {
        color: 'white',
        fontSize: "2em",
        textAlign: "center",
        margin: 0
    }
}))
function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    return(
        <div className={classes.homeContainer}>
            <div className={classes.logoContainer}>
                <img src={bridge} alt="Golden Gate Bridge"  className={classes.image}/>
            </div>
            <div className={matches ? classes.mobileHeaderContainer : classes.headerContainer}>
                <h1 className={matches ? classes.mobileHeader : classes.header}>Welcome</h1>
                <div className={classes.headerImage1}></div>
                <div className={classes.headerImage2}></div>
                <div className={classes.headerImage3}></div>
            </div>
            <div className={matches ? classes.mobileMajorContainer : classes.majorContainer}>
                <p className={matches ? classes.mobileMajorText : classes.majorText}>Hi, I'm Derek.</p>
                <p className={matches ? classes.mobileMajorText : classes.majorText}>I'm a fullstack developer.</p>
            </div>
            <p className={matches ? classes.mobileText : classes.text}>Hello and welcome to my website. I'm so excited to be here, following my dream into a bright future. The purpose of this page is to show a little bit of what I can do and maybe even in the future a place where other developers can grow as well. For a peek into my latest work, check out my <a href="/projects" className={classes.link}>Projects Section</a>.</p>
        </div>
    )
}

let fontConfig = {
    google: [
      'Pangolin',
      'Roboto Mono',

    ],
    file: [
      {
        fontFamily: 'wickedGrit',
        fontStyle:  'normal',
        fontWeight: 400,
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
        file: wickedGrit,
        fontType: 'truetype',
        fileLocal: 'wickedGrit Regular'
      },

    ],
  }

  export default ReactFontFace(Home, fontConfig)