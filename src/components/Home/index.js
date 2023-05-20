import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../../assets/Panel1.png";
import image2 from "../../assets/action.png";
import image3 from "../../assets/Speaking1.png";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "white"
      }}
    >
      <Box
        sx={{
          width: "85%",
          padding: "10px",
          borderRadius: "15px",
          backgroundColor: "#041E42" // Dallas Cowboys navy color
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            padding: "35px"
          }}
        >
          <img src={image1} alt="on field" style={{ width: "30%" }} />
          <img src={image2} alt="broadcast" style={{ width: "30%" }} />
          <img src={image3} alt="dinnerGala" style={{ width: "30%" }} />
        </Box>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "Futura", color: "#FFFFFF" }} // Set white color for the text
        >
          Babe Laufenberg
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "#FFFFFF" // Set white color for the text
          }}
        >
          With combined career success in both the NFL and broadcasting, Babe
          Laufenberg is one of the most popular sports personalities in North
          Texas. After his 25th season with the Dallas Cowboys Radio Network,
          Babe has the longest tenure of any color analyst in the network's
          history. Babe is a highly sought-after keynote speaker and event host,
          moderating and emceeing high-profile charitable and corporate events,
          engaging and entertaining a wide array of audiences.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
