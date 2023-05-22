import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

const PhotoGallery = () => {
  const tileData = [
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Interviewing-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2018/02/UA_August_10_2017-373-1024x683.jpg",
      cellHeight: 410,
      cols: 1
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_2-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_4-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_9-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_7-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2019/03/Leukemia-Lymphoma-Society-Luncheon.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Edited-7765-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Edited-7813-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/IMG_5206-1-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/IMG_5492-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Roger-Staubach-Meredith-Land-Babe-Laufenberg-and-Michelle-Staubach-Grimes-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-and-Jason-Garrett-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Luke-Laufenberg-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/2017-The-Gatehouse-2114-copy-1-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Photo-with-Jennifer-Sampson-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/UA_August_10_2017-330-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Omni-Ribbon-Cutting-2-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_1-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_5-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/Babe-Laufenberg_6-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2016/07/0033-400x400_c.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2018/02/Triplets-871x1024.jpg"
    },
    {
      img: "https://babelaufenberg.com/wp-content/uploads/2018/02/Babe-Advice-to-Dak-873x1024.jpg"
    }
  ];

  return (
    <div>
      <h2>Photo Gallery</h2>
      <GridList cellHeight={450} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols} style={{ height: tile.cellHeight }}>
            <img src={tile.img} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default PhotoGallery;
