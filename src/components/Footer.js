import React from "react";
import { Typography, Link, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#37505C",
        color: "primary.contrastText",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
      }}
    >
      <Typography variant="body2" color="inherit" align="center">
        Made by Gabriela Martínez
      </Typography>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Link href="https://linkedin.com/in/gabrielamtnez" color="inherit">
          <LinkedInIcon />
        </Link>
        <Link href="mailto:gabrielabmtnezg@gmail.com" color="inherit">
          <EmailIcon />
        </Link>
        <Link href="https://github.com/matcom-chacha" color="inherit">
          <GitHubIcon />
        </Link>
        <Link href="https://twitter.com/gabyBabuchi" color="inherit">
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
