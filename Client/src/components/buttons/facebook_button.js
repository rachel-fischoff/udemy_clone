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
  image: {
    objectFit: "contain",
  },
  media:{
        width: 'auto',
  }
}));

export default function FacebookButton() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "80px" }} className={classes.paper}>
      <Card className={classes.image}>
        <CardMedia className={classes.media}
          component="img"
          height="90"
          width ="50%"
          image={require("../../assets/facebook_login.png")}
          //   onClick={handleFacebookSignIn}
        />
      </Card>
    </div>
  );
}