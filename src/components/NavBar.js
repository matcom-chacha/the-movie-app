import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
    background: "#37505C",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          The Movie DB
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
