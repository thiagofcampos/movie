import React from 'react';
import { LineDown } from './style';

function lineDown({
  marginTop= "10px",
  marginBottom= "10px",
  display = "block",
  width = "100%",
  height = "1px",
  backgroundColor = "#e2dfdf" }) {
    
  return (
    <div>
      <LineDown
        marginTop={marginTop}
        display={display}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        marginBottom={marginBottom}
      >
      </LineDown>
    </div>
  );
}

export default lineDown;
