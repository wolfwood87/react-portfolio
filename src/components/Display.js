import React, {useState, useEffect, useRef} from "react"
import { makeStyles } from '@material-ui/styles';
import Home from "./Home.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Projects from "./Projects.js"
import { useScrollTrigger } from "@material-ui/core"
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1000
      },
    container: {
        // backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    prev: {
        border: "1px solid black",
        width: "10%",
        height: "30%",
        marginTop: "20%",
        marginLeft: "-5%",
        transform: `rotate(${-1.25 * 33}deg)`,
        cursor: "pointer"
    },
    next: {
        border: "1px solid black",
        width: "10%",
        height: "80%",
        marginLeft: "92%",
        marginTop: "-52%",
        transform: `rotate(${1.25 * 30}deg)`,
        cursor: "pointer"
    },
    invisiCarousel: {
        display: "none"
    },
    projectDisplay: {
        border: "1px solid black",
        borderRadius: "50%",
        height: "40vh",
        width: "25%",
        display: "grid",
        margin: "auto"
    },
    scroll: {
        color: "white",
        width: "100%",
        textAlign: "center",
        fontSize: '1em',
        border: "2px solid white",
        marginBottom: 0,
        cursor: "pointer",
        backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)"
    },
    scrollButton: {
        backgroundColor: theme.palette.secondary.light,
    }
}))
function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

export default function Display(props) {
    const [position, setPosition] = useState({0:-1, 1:0, 2:1})
    const [slideIndex, setSlideIndex] = useState({0: 0, 1:1, 2:2})
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();
    const scrollHome = () => homeRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollContact = () => contactRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollProject = () => projectRef.current.scrollIntoView({ behavior: "smooth" })
    

    const classes = useStyles()
    const [display, setDisplay] = useState(<Home />)

    useEffect(() => {
        switch(window.location.pathname) {
            case "/":
                scrollHome()
                break
            case "/about":
                scrollAbout()
                break
            case "/contact":
                scrollContact()
                break
            case "/projects":
                scrollProject()
                break
            default:
                break
        }
    }, [window.location.pathname])
    useEffect(() => {
        console.log("Hi")
    }, [slideIndex])
    return (
        <div className={classes.displayContainer}>
            <div className={classes.container} ref={homeRef} id="back-to-top-anchor">
            <Home />
            {/* <a title = "Go to About section" className={classes.scroll} onClick={scrollAbout}>∨</a> */}
            </div>
            <div className={classes.container} ref={aboutRef}>
            <About />
            {/* <a title = "Go to Projects section" className={classes.scroll} onClick={scrollProject} >∨</a> */}
            </div>
            <div className={classes.container} ref={projectRef}>
            <Projects />
            {/* <a title = "Go to Contact section" className={classes.scroll} onClick={scrollContact} >∨</a> */}
            </div>
            <div className={classes.container} ref={contactRef}>
            <Contact />
            {/* <a title = "Go to Home section" className={classes.scroll} onClick={scrollHome}>Return to top</a> */}
            </div>
            <ScrollTop {...props}>
                <Fab className={classes.scrollButton} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    )
}