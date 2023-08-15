import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ marginBottom: "2rem", background: "#37505C" }}
    >
      <Toolbar>
        <Link
          to="/"
          style={{
            flexGrow: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Typography variant="h6">The Movie DB</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
