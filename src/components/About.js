import React from "react";
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import aboutPic from "../images/About-me.jpg"
import ReactFontFace from 'react-font-face'
import wickedGrit from './assets/WickedGrit.ttf'

const useStyles = makeStyles(theme => ({
    major: {
        color: "white",
        width: "92%",
        padding: "1em",
        marginBottom: 0,
        marginTop: 0,
        fontFamily: 'wickedGrit',
        fontSize: "2em"
        // backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)"
    },
    mobileMajor: {
        color: "white",
        width: "92%",
        padding: "1em",
        margin: "auto",
        marginBottom: 0,
        marginTop: 0,
        fontFamily: 'wickedGrit',
        fontSize: "2em",
        // backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)"
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        margin: 0,
        opacity: ".5",
        zIndex: -1
    },
    mobileImage: {
        width: "400px",
        margin: "auto",
        opacity: ".5",
        zIndex: -1,
        border: "1px solid white"
    },
    text: {
        padding: "2%",
        background: "transparent",
        color: "white",
        fontSize: "1.5em"
    },
    mobileText: {
        padding: "2%",
        width: "90%",
        background: "transparent",
        color: "white",
        fontSize: "1.5em",
        textAlign: "center",
        margin: "auto"
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main
    },
    homeContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 1)",
        zIndex: 1000
    },
    mobileHomeContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 1)",
        zIndex: 1000
    },
    textContainer: {
        marginTop: "15%",
        marginRight: "15%",
        width: "35%",
    },
    mobileTextContainer: {
        width: "100%",
        marginBottom: "10%"
    }
}))

function About(props) {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    return(
        <div className={matches ? classes.mobileHomeContainer : classes.homeContainer}>

                
                <span><img src={aboutPic} alt="beach" className={matches ? classes.mobileImage : classes.image} /></span>
 
            <div className={matches ? classes.mobileTextContainer : classes.textContainer}>
                <h2 className={matches ? classes.mobileMajor : classes.major}>About</h2>
                <p className={matches ? classes.mobileText : classes.text}>A little bit about me, hmm. I was born and raised in the Midwest but am currently living in the Bay area in California. I have a wonderful wife and a five year old little boy who is the coolest kid ever. I'm a bit of a nerd. I enjoy getting away from all the noise and reading a book. I also enjoy video games in my free time.</p>
            </div>
            
            
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

  export default ReactFontFace(About, fontConfig)