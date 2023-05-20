import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#002244",
    color: "#FFFFFF",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "2px solid #869397",
  },
  icon: {
    margin: theme.spacing(1),
    color: "#FFFFFF"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box>
        <Typography
          variant="body2"
          align="center"
          style={{ fontSize: "30px", fontFamily: "Verdana" }}
        >
          Connect with Babe:
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton
            className={classes.icon}
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFFFFF" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFFFFF" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFFFFF" }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
