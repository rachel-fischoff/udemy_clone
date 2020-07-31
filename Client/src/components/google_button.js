import React from "react";
import { useGoogleLogin } from 'react-google-login'
import Card from '@material-ui/core/Card'
import CardMedia from "../../node_modules/@material-ui/core/CardMedia";
import {refreshTokenSetup} from '../utils/refreshTokenSetup'

const keys = require('../../../config/keys');

const clientId = keys.googleClientID

export default function GoogleLoginButton () {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser: ', res.profileObj);
        refreshTokenSetup(res);
    }

    const onFailure =(res) => {
        console.log('Login failed: res', res);
    }

    const {signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        idSignedIn: true,
        accessType: 'offline'
    })

    return (
        <Card>
        <CardMedia
          component="img"
          height="40"
          image={require("../assets/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png")}
          onClick={signIn}
        />
      </Card>
    )
}



