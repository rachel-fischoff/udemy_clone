import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    alignItems: "center",
    padding: '8px 8px',
    margin: '8px 8px',
  },
  media: {
    height: 140,
  },
  action: {
    display: "block",
  },
});

export default function CourseThumbnail() {
  // const [courseData, setCourseData] = useState()

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../assets/debby-hudson-asviIGR3CPE-unsplash.jpg")}
          title="Course Display"
        />
        <CardContent>
          <Typography component="h2">Course Name</Typography>
          <Typography color="textSecondary" component="h4">
            Instructor
          </Typography>
          <Typography color="textSecondary" component="h4">
            Reviews (avg + total number)
          </Typography>
          <Typography component="h2">Price</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
