import React from "react";
import { Box } from "@mui/system";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/path/to/hero-photo.jpg")`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }}
    >
      <div>
        <h1>Babe Laufenberg</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          risus eu urna efficitur blandit. Nulla facilisi. Sed gravida
          pellentesque augue, in varius ipsum pulvinar vitae. Phasellus
          sollicitudin est et congue semper. Sed vehicula mauris vel mauris
          faucibus, vel posuere eros tincidunt. Sed condimentum ullamcorper
          tortor at efficitur. Integer dapibus est vitae urna rutrum, ut ornare
          tortor varius. In sit amet rutrum nunc. Proin consectetur justo ac mi
          pulvinar consequat. Aliquam sit amet velit ac mauris pharetra
          convallis. Donec in est nec magna volutpat commodo a et purus. Nulla
          posuere massa et tincidunt vestibulum. Aenean rhoncus pellentesque
          urna, ac elementum est volutpat non.
        </p>
      </div>
    </Box>
  );
}

export default Home;
