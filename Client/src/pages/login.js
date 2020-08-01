import React from "react";
import GoogleButton from "./../components/buttons/google_button";
import TwitterButton from './../components/buttons/twitter_button';
import FacebookButton from './../components/buttons/facebook_button'
import {makeStyles} from '@material-ui/core/styles'
import SecondaryNav from "./../components/menus/secondary_nav_bar";

export default function Login() {
  return (
    <div>
      <SecondaryNav/>
      {" "}
      Login with Google, Twitter or Facebook! 
      <GoogleButton />{" "}
      <TwitterButton/>
      <FacebookButton/>
    </div>
  );
}