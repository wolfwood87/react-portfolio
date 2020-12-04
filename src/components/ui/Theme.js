import { createMuiTheme } from '@material-ui/core/styles';


const resRed   = "#0D4F8B";

const resSilver = "#9BC4E2";
 

export default createMuiTheme({
  palette: {
    common: {
      red: `${resRed}`,
      silver: `${resSilver}`
    },
    primary: {
      main: `${resRed}`
    },
    secondary: {
      main: `${resSilver}`
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }  
});