import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  palette: {
    primary: {
      light: "#6d6d6d",
      main:  "#424242",
      dark:  "#1b1b1b",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#000",
    },
    // type: "dark",
  },
});
export default theme;
