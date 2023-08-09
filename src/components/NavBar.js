import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
    background: "#37505C",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    textDecoration: "none",
    color: "inherit",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="h6">The Movie DB</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
