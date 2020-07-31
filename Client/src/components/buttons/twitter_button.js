import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
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
}));

export default function TwitterButton() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "80px" }} className={classes.paper}>
      <Card>
        <CardMedia
          className={classes.image}
          component="img"
          height="30"
          image={require("../../assets/sign-in-with-twitter-gray-1-png-img-fullhd-medium.png.img.fullhd.medium.png")}
          //   onClick={handleTwitterSignIn}
        />
      </Card>
    </div>
  );
}
