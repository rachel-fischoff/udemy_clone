import React from "react";
import { useGoogleLogin } from 'react-google-login'
import Card from '@material-ui/core/Card'
import CardMedia from "../../node_modules/@material-ui/core/CardMedia";
import { makeStyles } from '@material-ui/core/styles'
import {refreshTokenSetup} from '../utils/refreshTokenSetup'

// const keys = require('../../../config/keys');

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
}))

// const clientId = 

export default function GoogleLoginButton () {

    const classes = useStyles ()

    const onSuccess = (res) => {
        console.log('Login Success: currentUser: ', res.profileObj);
    //     refreshTokenSetup(res);
    }

    const onFailure =(res) => {
        console.log('Login failed: res', res);
    }

    const {signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        // clientId,
        idSignedIn: true,
        accessType: 'offline'
    })

    return (
        <div style={{marginTop:'80px'}} className = {classes.paper}>
        <Card >
        <CardMedia
          component="img"
          height="60"
          image={require("../assets/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png")}
          onClick={signIn}
        />
      </Card>
      </div>
    )
}



