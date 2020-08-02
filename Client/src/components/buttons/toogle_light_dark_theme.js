import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";

const useStyles = makeStyles((theme) => ({
  button: {
    color: '#fff',
  },
  overrides: {
    MuiPalette: {
      type: "dark",
    },
  },
}));

export default function ToogleThemeButton() {
  const classes = useStyles();

  const handleChangeTheme = () => {};

  return (
    <div>
      <IconButton
        className={classes.button}
        onClick={handleChangeTheme}
      >
        <Brightness4OutlinedIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
