import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactFontFace from 'react-font-face'
import wickedGrit from './assets/WickedGrit.ttf'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import * as emailjs from 'emailjs-com'

const useStyles = makeStyles(theme => ({
    header: {
        color: theme.palette.primary.main,
        textAlign: "center",
        width: "100%",
        height: "1em",
        padding: ".5em",
        marginTop: 0,
        marginBottom: 0,
        fontFamily: "wickedGrit",
        fontSize: "2em"
    },
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "1%"
    },
    descText: {
        marginTop: 0,
        fontSize: "1.25em"
    },
    image: {
        border: "2px solid black",
        height: "15vw",
        width: "40%",
    },
    contactContainer: {
        border: "2px solid",
        borderRadius: "10px",
        borderColor: theme.palette.primary.light,
        width: "60%",
        marginTop: "12%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "white",

    },
    mobileContactContainer: {
        border: "2px solid",
        borderRadius: "10px",
        borderColor: theme.palette.primary.light,
        width: "90%",
        marginTop: "12%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "white",

    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main
    },
    fieldContainer: {
        width: "80%",
        marginBottom: "3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    field: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "1%"
    },
    linksContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "30%",
        marginBottom: "1%"
    },
    links: {
        color: theme.palette.primary.main,
    },
    submitButton: {
        backgroundColor: theme.palette.primary.main,
        marginTop: "1%",
        color: "white",
        padding: "1%",
        borderRadius: "5px",
        fontSize: "1em",
        width: "20%",
        border: "2px solid black",
        cursor: "pointer"
    },
    mobileSubmitButton: {
        backgroundColor: theme.palette.primary.main,
        marginTop: "1%",
        color: "white",
        padding: "1%",
        borderRadius: "5px",
        fontSize: "1em",
        width: "50%",
        border: "2px solid black",
        cursor: "pointer"
    }
}))

function Contact(props) {
    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const handleChange = e => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        emailjs.init("user_ppsefiH8XzQXzkQKZK20l");
        const templateId = 'template_7enoek5';
        sendFeedback(templateId, {message: formData.message, from_name: formData.name, reply_to: formData.email})
    }

    const sendFeedback = (templateId, variables) => {
        emailjs.send(
          'service_ge0fd2k', templateId,
          variables,
          "user_ppsefiH8XzQXzkQKZK20l"
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))}
    return(
        <div className={matches ? classes.mobileContactContainer : classes.contactContainer}>
            <div className={classes.headerContainer}>
                <h2 className={classes.header}>Contact Me</h2>
                <p className={classes.descText}>I would love to hear from you!</p>
            </div>
            <form className={classes.fieldContainer} onSubmit={handleSubmit}>
                    <div class="field half" className={classes.field}>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div class="field half" className={classes.field}>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div class="field" className={classes.field}>
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                <input type="submit" value="Send Message" class="primary" className={matches ? classes.mobileSubmitButton : classes.submitButton}/>      
            </form>
            <div className={classes.linksContainer}>
                <a href="https://www.linkedin.com/in/derek-glynn/" class="icon brands fa-linkedin" className={classes.links}>
                    <LinkedInIcon fontSize="large"/>
                </a>
                <a href="https://github.com/wolfwood87/" class="icon brands fa-github" className={classes.links}>
                        <GitHubIcon fontSize="large"/>
                </a>
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

  export default ReactFontFace(Contact, fontConfig)