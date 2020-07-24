import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FormDialog from "./login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    zIndex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: { marginLeft: theme.spacing(2) },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "160px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function LoginSearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [categoriesMoreAnchorEl, setCategoriesMoreAnchorEl] = React.useState(
    null
  );

  const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //   const isCategoriesMenuOpen = Boolean(categoriesMoreAnchorEl);

  const handleClick = (event) => {
    setCategoriesMoreAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCategoriesMoreAnchorEl(null);
  };

  //   const handleProfileMenuOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleMobileMenuClose = () => {
  //     setMobileMoreAnchorEl(null);
  //   };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  //   const handleMobileMenuOpen = (event) => {
  //     setMobileMoreAnchorEl(event.currentTarget);
  //   };

  //   const menuId = "primary-search-account-menu";
  //   const renderMenu = (
  //     <Menu
  //       anchorEl={anchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       id={menuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       open={isMenuOpen}
  //       onClose={handleMenuClose}
  //     >
  //       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //     </Menu>
  //   );

  //   const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <AssignmentOutlinedIcon className={classes.menuButton} />

          <Typography className={classes.title} variant="h6" noWrap>
            eLearning Platform
          </Typography>
          {/* TODO: currently udemy has a drop down menu that drops on hover */}
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onMouseOver={handleClick}
            // onClick={handleClick}
          >
            Categories
          </Button>
          <Menu
            id="simple-menu"
            variant="selectedMenu"
            anchorEl={categoriesMoreAnchorEl}
            // TODO: implement an anchorOrigin where the menu drops down --
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(categoriesMoreAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Category1</MenuItem>
            <MenuItem onClick={handleClose}>Category2</MenuItem>
            <MenuItem onClick={handleClose}>Category3</MenuItem>
          </Menu>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </IconButton>
          {/* <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            // onClick = {doSomething}
          >
            LOGIN
          </Button> */}
          <FormDialog />
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            // onClick = {doSomething}
            variant="contained"
            color="secondary"
          >
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */}
    </div>
  );
}
