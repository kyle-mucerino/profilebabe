import React from "react";
import { Box } from "@mui/system";

function PhotoGallery() {
  const images = [
    require("../../assets/rbPic.png").default,
    require("../../assets/broadcast.png").default,
    require("../../assets/dinnerGala.png").default
    // Add more image paths as needed
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image, index) => (
        <Box key={index} sx={{ p: 1, width: "25%" }}>
          <img
            src={image}
            alt={` ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      ))}
    </Box>
  );
}

export default PhotoGallery;
