import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <img
              src="./assets/dinnerGala.png"
              alt="Dinner Gala"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <Typography variant="h6" component="div">
            Babe Laufenberg
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
