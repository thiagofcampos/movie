import React from 'react';
import { Image } from './style';

function image({
  url,
  backgroundSize = "cover",
  width = "50px",
  height = "50px",
  backgroundColor = "#f1f1f1" }) {
    
  
  console.log("logo", url)
  return (
    <div>
      <Image
        url={url}
        backgroundSize={backgroundSize}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      >
      </Image>
    </div>
  );
}

export default image;
