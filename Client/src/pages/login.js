import React from "react";
import GoogleButton from "./../components/buttons/google_button";
import TwitterButton from './../components/buttons/twitter_button';
import FacebookButton from './../components/buttons/facebook_button'
import {makeStyles} from '@material-ui/core/styles'

export default function Login() {
  return (
    <div>
      {" "}
      Login with Google, Twitter or Facebook! 
      <GoogleButton />{" "}
      <TwitterButton/>
      <FacebookButton/>
    </div>
  );
}