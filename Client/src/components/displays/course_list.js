import React from "react";
import CourseThumbnail from "./course_thumbnail";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CourseList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <CourseThumbnail />
        </Grid>
        <Grid item justify="center" direction="row" alignItems="center" sm={3}>
          <CourseThumbnail />
        </Grid>
        <Grid item justify="center" direction="row" alignItems="center" sm={3}>
          <CourseThumbnail />
        </Grid>
        <Grid item justify="center" direction="row" alignItems="center" sm={3}>
          <CourseThumbnail />
        </Grid>
      </Grid>
      {/* </GridList> */}
    </div>
  );
}
