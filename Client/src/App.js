import React from "react";
import "./App.css";
import { Router, Switch, Route, Link } from "../node_modules/react-router-dom";
import { ThemeProvider } from "../node_modules/@material-ui/core/styles";
import CssBaseline from "../node_modules/@material-ui/core/CssBaseline";
import LoggedInAppBar from "./components/menus/loggedin_nav_bar";
import LoggedOutAppBar from "./components/menus/loggedout_nav_bar";
import Home from './pages/home';
import Login from './components/login';
import GoogleLoginButton from './components/google_button';
import history from './history';
import UserProvider from './contexts/user_provider';

function App() {
  return (
    <div className="App">
    <Router history = {history} >
    
        {/* <ThemeProvider> */}
        <CssBaseline />
        <UserProvider>
         
          <Route path = "/" component={LoggedInAppBar}/>
          {/* <Route path= "/profile" component={profile} /> */}
          </UserProvider>
          <Route path="/" exact component={Home}/>
          {/* TODO: Have a nav bar that switches based on logged in or logged out? where do i put this component and how? */}
          {/* <PrimarySearchAppBar /> */}
          {/* TODO:  create a <SecondaryNav /> */}
            {/* <Route exact path="/"> TODO: include some redirects /home /courses */}
          
            {/* <Route exact path="/courses/:category> */}
            {/* <CategoryPage/> */}
      
            {/* <Route exact path="/courses/:category/:detail> */}
            {/* <DetailPage/> */}
            {/* </Route> */}
          {/* </Switch> */}
        {/* </ThemeProvider> */}
        </Router>
      </div>
 
  );
}

export default App;
