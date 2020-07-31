import React from "react";
import Avatar from "../../node_modules/@material-ui/core/Avatar";
import Button from "../../node_modules/@material-ui/core/Button";
import CssBaseline from "../../node_modules/@material-ui/core/CssBaseline";
import TextField from "../../node_modules/@material-ui/core/TextField";
import FormControlLabel from "../../node_modules/@material-ui/core/FormControlLabel";
import Checkbox from "../../node_modules/@material-ui/core/Checkbox";
import Link from "../../node_modules/@material-ui/core/Link";
import Grid from "../../node_modules/@material-ui/core/Grid";
import Box from "../../node_modules/@material-ui/core/Box";
import LockOutlinedIcon from "../../node_modules/@material-ui/icons/LockOutlined";
import Typography from "../../node_modules/@material-ui/core/Typography";
import { makeStyles } from "../../node_modules/@material-ui/core/styles";
import Container from "../../node_modules/@material-ui/core/Container";
import CardMedia from "../../node_modules/@material-ui/core/CardMedia";
import Card from "../../node_modules/@material-ui/core/Card";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const handleGoogleSignIn = () => {

  }

  return (
    <div style={{marginTop:'80px'}} className={classes.paper} >
        <Card>
          <CardMedia
            component="img"
            height="40"
            image={require("../assets/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png")}
            onClick={handleGoogleSignIn}
          />
        </Card>

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
