import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function GoogleButton() {
  const classes = useStyles();

  const handleGoogleSignIn = () => {
    href  = "auth/google"
  }

  return (
    <div style={{ marginTop: "80px" }} className={classes.paper}>
      <Card>
        <CardMedia
          component="img"
          height="90"
          image={require("../../assets/btn_google_signin_dark_normal_web@2x.png")}
          //   onClick={handleGoogleSignIn}
        />
      </Card>
    </div>
  );
}
