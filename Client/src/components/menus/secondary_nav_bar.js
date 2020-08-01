import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    marginTop: "70px",
    display: "flex",
  },
}));

export default function SecondaryNav() {
  const classes = useStyles();
  const [openBackEnd, setOpenBackEnd] = useState(false);
  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [openDevOps, setOpenDevOps] = useState(false);

  const handleClickBackEnd = () => {
    setOpenBackEnd(!openBackEnd);
  };
  const handleClickFrontEnd = () => {
    setOpenFrontEnd(!openFrontEnd);
  };
  const handleClickData = () => {
    setOpenData(!openData);
  };
  const handleClickDevOps = () => {
    setOpenDevOps(!openDevOps);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={handleClickBackEnd}>
        <ListItemIcon>
          <ComputerOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Back End" />
        {openBackEnd ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openBackEnd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Functional Programming" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickFrontEnd}>
        <ListItemIcon>
          <BrushOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Front End" />
        {openFrontEnd ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openFrontEnd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="React" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickData}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Data" />
        {openData ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openData} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Machine Learning" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickDevOps}>
        <ListItemIcon>
          <BuildOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Dev Ops" />
        {openDevOps ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openDevOps} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Deployment" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
