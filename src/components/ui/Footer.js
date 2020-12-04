import React from "react";
//material ui imports
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

//component styles
const useStyles = makeStyles(theme => ({
  footerContainer: {
    position:"absolute",
    bottom: 0,
    width: "100vw",
  },
  footer: {
    backgroundColor: theme.palette.primary.dark,
    width: "100%",
  },
  toolBar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: ".5%"
  },
  navContainer: {
    backgroundColor: theme.palette.primary.dark,
    height: "1%",
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
  },
  nav: {
    color: "white",
    marginLeft: "1%",
    marginRight: "1%",
    fontSize: "1em",
    textDecoration: "none",
    width: "30%",
    textAlign: "center"
  },
  mobileNav: {
    color: "white",
    marginLeft: "1%",
    marginRight: "1%",
    fontSize: "1em",
    textDecoration: "none",
    width: "80%",
    textAlign: "center"
  },
  div: {
    color: "white",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1.5%"
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      <footer className={classes.footerContaier}>
        <Toolbar className={classes.toolBar}>
        <div className={matches ? classes.mobileNav : classes.nav}>Custom fonts courtesy of<a href="http://www.fontsly.com" className={matches ? classes.mobileNav : classes.nav}>Fontsly</a></div>
          <div className={matches ? classes.mobileNav : classes.nav}>© 2020 Derek Glynn All Rights Reserved.</div>
        </Toolbar>
      </footer>
    </>
  );
}
