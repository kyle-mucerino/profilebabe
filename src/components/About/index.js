import { Box } from '@mui/system';
import React from 'react';

function About() {
  return (
    <Box
      sx={{
        backgroundImage: require("../../assets/broadcast.png"),
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      With combined career success in both the NFL and broadcasting, Babe
      Laufenberg is one of the most popular sports personalities in North Texas.
      After his 25th season with the Dallas Cowboys Radio Network, Babe has the
      longest tenure of any color analyst in the network's history. Babe is a
      highly sought-after keynote speaker and event host, moderating and
      emceeing high-profile charitable and corporate events, engaging and
      entertaining a wide array of audiences. 
    </Box>
  );
}
export default About;