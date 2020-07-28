import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrimarySearchAppBar from "./components/main_nav_bar";
import LoginSearchAppBar from "./components/main_nav_bar_home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ThemeProvider> */}
          <CssBaseline />
          {/* TODO: Have a nav bar that switches based on logged in or logged out? where do i put this component and how? */}
          {/* <PrimarySearchAppBar /> */}
          <LoginSearchAppBar />
          {/* TODO:  create a <SecondaryNav /> */}

          <Switch>
            {/* <Route exact path="/"> TODO: include some redirects /home /courses */}
            {/* <Login/> */}
            {/* </Route> */}
            {/* <Route exact path="/courses/:category> */}
            {/* <CategoryPage/> */}
            {/* </Route> */}
            {/* <Route exact path="/courses/:category/:detail> */}
            {/* <DetailPage/> */}
            {/* </Route> */}
          </Switch>
        {/* </ThemeProvider> */}
      </div>
    </Router>
  );
}

export default App;
