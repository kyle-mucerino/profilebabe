import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import onFieldImage from "../../assets/Review7.png";
import broadcastImage from "../../assets/Review6.png";
import image4 from "../../assets/Review1.png";
//import image5 from "../../assets/Review2.png";

const WovenImageList = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  "& > *": {
    flex: " 1 0 auto",
    height: "100%",
    objectFit: "contain",
    maxWidth: "25%",
    borderRadius: theme.spacing(1)
  }
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <WovenImageList>
            <img src={onFieldImage} alt="On Field" loading="lazy" />
            <img src={broadcastImage} alt="Broadcast" loading="lazy" />
            <img src={image4} alt="rbPic" loading="lazy" />
          </WovenImageList>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontFamily: "fantasy",
              color: "#041E42",
              marginLeft: "20px"
            }}
          >
            From those who have worked with Babe...
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
