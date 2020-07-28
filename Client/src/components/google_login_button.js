import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  ({
    button: {
      margin: theme.spacing(0, 0, 1),
      display: "flex",

      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      height: "36px",
      cursor: "pointer",
      textDecoration: "none",
    },
    wrapper: {
      marginTop: "1px",
      marginLeft: "1px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight:'100%',
    //   width: "34px",
    //   height: "34px",
      borderRadius: "2px",
      backgroundColor: "#fff",
    },
    icon: {
      width: "18px",
      height: "18px",
    },
    text: {
      margin: "0 34px 0 0",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "bold",
      textTransform: "uppercase",
      flexGrow: 1,
      textAlign: "center",
      alignSelf: "center",
    },
  })
);

export default function GoogleLoginButton(props) {
  const classes = useStyles();

  return (
    // <a href={"http://localhost:5000/auth/google"} className={classes.button}>
      <div style={{ topMargin: "80px"}}>
        <Card>
          <CardMedia
            // component="image"
            height="280"
            image={require("../assets/google_signin_buttons/web/2x/btn_google_signin_dark_normal_web@2x.png")}
          />
        </Card>
      </div>
    // </a>
  );
}
