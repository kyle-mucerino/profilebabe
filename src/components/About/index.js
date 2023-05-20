import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundColor: "#002244",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          borderRadius: "10px"
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "Futura",
            color: "#FFFFFF",
            marginBottom: "20px",
            fontSize: "60px"
          }}
        >
          About Babe
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          width: "85%",
          marginBottom: "60px"
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "navy",
            textAlign: "center"
          }}
        >
          With combined career success in both the NFL and broadcasting, Babe
          Laufenberg is one of the most popular sports personalities in North
          Texas. After his 25th season with the Dallas Cowboys Radio Network,
          Babe has the longest tenure of any color analyst in the network's
          history. Considered one of the most talented and charismatic
          broadcasters in the business, he was the lead sports anchor for KTVT
          CBS 11 for 17 years, and was twice selected as the Sportscaster of the
          Year in the state of Texas by the National Sportscasters and
          Sportswriters Association.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "navy",
            textAlign: "center"
          }}
        >
          Drafted by the Washington Redskins in 1983, Babe played eight years as
          a quarterback in the NFL. In addition to his time with Washington, he
          played for the New Orleans Saints, San Diego Chargers, and finished
          his career playing two seasons with the Dallas Cowboys. He was also
          selected in the Major League Baseball draft out of high school by the
          San Francisco Giants.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "navy",
            textAlign: "center"
          }}
        >
          Babe began his collegiate career at Stanford University before
          transferring to Indiana University, where he set numerous passing
          records playing for legendary college football analyst Lee Corso. Babe
          graduated with a business degree from Indiana University's Kelley
          School of Business.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "navy",
            textAlign: "center"
          }}
        >
          In addition to filing Cowboys reports for NexStar Broadcasting
          featured in television markets across three states, he is a highly
          sought-after keynote speaker and event host. Babe moderates and emcees
          high-profile charitable and corporate events, engaging and
          entertaining a wide array of audiences. Committed to helping young
          athletes reach their full potential on and off the field, Babe volubnteers his time to teach at youth football camps across the country.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontFamily: "Futura",
            color: "#FFFFFF",
            textAlign: "center"
          }}
        >
          Babe has two sons, Joe Willie (24) and Luke, who died of cancer on
          August 22, 2019 at the age of 21.
        </Typography>
      </Box>
    </Box>
  );
}

export default About; 
