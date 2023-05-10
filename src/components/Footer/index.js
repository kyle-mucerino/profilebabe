import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import theme from '../'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    margin: theme.spacing(1),
    color: theme.palette.common.white
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box>
        <Typography variant="body2" align="center">
          Connect with me:
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton
            className={classes.icon}
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
