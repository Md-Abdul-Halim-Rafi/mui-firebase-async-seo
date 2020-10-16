import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import HashLinks from "./hashLinks";
import baseTheme from "./theme/baseTheme";


const App = () => {
  return (
    // <HelmetProvider>
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <BrowserRouter basename='/'>
        <HashLinks />
      </BrowserRouter>
    </ThemeProvider>
    // </HelmetProvider>
  );
};

export default App;
