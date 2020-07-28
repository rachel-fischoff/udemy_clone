import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: { marginLeft: theme.spacing(2) },
}));

export default function LoginButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        to={{
          pathname: "/login",
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
          onClick={handleClickOpen}
        >
          LOGIN
        </Button>
      </Link>
    </div>
  );
}
