import React, {useState} from "react";
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {projectList} from './assets/projectList.js';
import code from "../images/code.jpg"
import ReactFontFace from 'react-font-face'
import wickedGrit from './assets/WickedGrit.ttf'

const useStyles = makeStyles(theme => ({
    main: {
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)",
        zIndex: 1000
    },
    mobileMain: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)",
        zIndex: 1000
    },
    major: {
      color: "white",
      textAlign: "center",
      width: "100%",
      padding: "1em",
      marginBottom: 0,
      marginTop: 0,
      backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)"
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100%",
      margin: 0,
      zIndex: -1,
      opacity: ".2"
  },
    headerText: {
        padding: "2%",
        width: "80%",
        margin: "auto",
        textAlign: "center",
        background: "transparent",
        color: "white",
        fontSize: "1.5em"
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main
    },
    projectsContainer: {
        height: "300px",
        width: "450px",
        margin: "auto",
        backgroundColor: "transparent",
        position: "relative",
      },
    logoContainer: {
        // border: "1px solid",
        // borderColor: theme.palette.primary.light,
        width: "500px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    mobileLogoContainer: {
      // border: "1px solid",
      // borderColor: theme.palette.primary.light,
      width: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"

  },
    description: {
      display: "flex",
      flexDirection: "column",
      width: "30%"
    },
    mobileDescription: {
      display: "flex",
      flexDirection: "column",
    },
    prev: {
      cursor: "pointer",
      color: "white",
      border: "none",
      // top: "45%",
      marginTop: '-1000px',
      fontWeight: "bold",
      fontSize: "18px",
      padding: "10px",
      transition: "0.6s ease",
      borderRadius: "3px 0 0 3px",
      userSelect: "none",
      backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #0D4F8B 74%)",
        
      zIndex: 1
    },
    next: {
      cursor: "pointer",
      border: "none",
      width: "auto",
      padding: "10px",
      color: "white",
      backgroundImage: "linear-gradient(245deg, #0D4F8B 0%, #b1bfd8 74%)",
        
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "3px 0 0 3px",
      userSelect: "none",
    },
    title: {
      color: "white",
      fontFamily: "wickedGrit"
    },
    mobileTitle: {
        color: "white",
        fontFamily: "wickedGrit",
        width: "80%",
        margin: "auto",
        textAlign: "center"
    },
    text: {
      textDecoration: "none",
      color: "white"
    },
    mobileText: {
      textDecoration: "none",
      color: "white",
      width: "90%",
      margin: "auto",
    },
    projectImage: {
      width: "100%",
      paddingTop: "8%",
      paddingBottom: "8%",
      backgroundColor: "#101010",
      border: "1px solid black"
    },
    backgroundImage: {
      width: "100%",
      border: "1px solid black"
    },
    
}))

function Projects(props) {
  const [project,setProject] = useState({title: projectList[0].title, github: projectList[0].github, link: projectList[0].link, description:  projectList[0].description})
  const [index,setIndex] = useState(0)
  const carouselHandler = (value) => {
    if (value > projectList.length-1) {
      setIndex(0)
      setProject({...project, title: projectList[0].title, github: projectList[0].github, link: projectList[0].link, description: projectList[0].description})
    }
    else if (value < 0) {
      setIndex(projectList.length-1)
      setProject({...project, title: projectList[projectList.length-1].title, github: projectList[projectList.length-1].github, link: projectList[projectList.length-1].link, description: projectList[projectList.length-1].description})
    }
    else{
    setIndex(value)
    setProject({...project, title: projectList[value].title, github: projectList[value].github, link: projectList[value].link, description: projectList[value].description})}
  }

    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    return(
        <div className={matches ? classes.mobileMain : classes.main}>
          <img src={code} alt="code"  className={classes.image}/>
          <div className={matches ? classes.mobileLogoContainer : classes.logoContainer}>
            <Carousel
            value={index}
            onChange={carouselHandler}
            className={classes.projectsContainer}
            slidesPerPage={1}
            breakpoints={{
              600: {
                arrows: false
              },
              960: {
                arrows: false
              }
            }}
            arrowLeft={
              <button className={classes.prev} data-testid="new-left">
                &#10094;
              </button>
            }
            arrowRight={<button className={classes.next}>&#10095;</button>}
            addArrowClickHandler
            infinite
          >
            {projectList.map((cl, i) => (
              <div
                key={i}
                className={classes.placeholderImage}
              >
                {cl.image ? <img src={cl.image} alt="project"className={classes.projectImage}/> :
                <img src={code} alt="background" className={classes.backgroundImage}/>}
              </div>
            ))}
          </Carousel>
          </div>
          <div className={matches ? classes.mobileDescription : classes.description}>
            <p className={classes.headerText}> Welcome to my projects page. Here are my recent projects.
            </p>

            <div>
            <h1 className={matches ? classes.mobileTitle : classes.title}>{project.title}</h1>
            <p className={matches ? classes.mobileText : classes.text}>{project.description}</p>
            <p className={matches ? classes.mobileText : classes.text}>Github: <a href={project.github} className={matches ? classes.mobileText : classes.text}>{project.github}</a></p>
            {project.link && (<p className={matches ? classes.mobileText : classes.text}>Live Server: <a href={project.link} className={matches ? classes.mobileText : classes.text}>{project.link}</a></p>)}
            
            </div>
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

export default ReactFontFace(Projects, fontConfig)