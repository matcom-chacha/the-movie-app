import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#37505C",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="inherit" align="center">
        Made by Gabriela Martínez
      </Typography>
      <div>
        <Link href="https://linkedin.com/in/gabrielamtnez" color="inherit">
          <LinkedInIcon className={classes.icon} />
        </Link>
        <Link href="mailto:gabrielabmtnezg@gmail.com" color="inherit">
          <EmailIcon className={classes.icon} />
        </Link>
        <Link href="https://github.com/matcom-chacha" color="inherit">
          <GitHubIcon className={classes.icon} />
        </Link>
        <Link href="https://twitter.com/gabyBabuchi" color="inherit">
          <TwitterIcon className={classes.icon} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
