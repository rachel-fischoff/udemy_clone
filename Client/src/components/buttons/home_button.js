import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles((theme) => ({
  button: { marginLeft: theme.spacing(2), color: "#fff" },
}));

export default function HomeButton() {
  const classes = useStyles();
  return (
    <div>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <IconButton className={classes.button} color="secondary">
          <HomeOutlinedIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
