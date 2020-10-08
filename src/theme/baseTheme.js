import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
          backgroundColor: "#cccccc50",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#556cd6",
          borderRadius: "20px",
          outline: "none",
        },
        "*::-moz-selection": {
          /* Code for Firefox */ color: "black",
          background: "#fff172",
        },

        "*::selection": {
          color: "black",
          background: "#fff172",
        },
        "*body": {
          fontFamily: `'Helvetica Neue', 'Kalpurush', Arial, sans-serif`,
        },
      },
    },
  },
});

export default baseTheme;
