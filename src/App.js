import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/ui/Theme.js"
import Header from "./components/ui/Header.js";
import Display from "./components/Display.js";
import Footer from "./components/ui/Footer.js";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Display} />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
