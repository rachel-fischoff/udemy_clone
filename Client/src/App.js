import React from "react";
import "./App.css";
import { Router, Route } from "../node_modules/react-router-dom";
import { ThemeProvider } from "../node_modules/@material-ui/core/styles";
import CssBaseline from "../node_modules/@material-ui/core/CssBaseline";
import theme from "./theme";
import LoggedInAppBar from "./components/menus/loggedin_nav_bar";
import LoggedOutAppBar from "./components/menus/loggedout_nav_bar";
import Home from "./pages/home";
import history from "./history";
import UserProvider from "./contexts/user_provider";
import Login from "./pages/login";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <Route path="/" component={LoggedOutAppBar} />
            {/* <Route path= "/profile" component={profile} /> */}
          </UserProvider>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
