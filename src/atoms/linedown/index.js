import React from 'react';
import { LineDown } from './style';

function lineDown(props) {
  const {
    marginTop = "10px",
    marginBottom = "10px",
    display = "block",
    width = "100%",
    height = "1px",
    backgroundColor = "#e2dfdf",
    padding="0"
  } = props;
  return (
    <>
      <LineDown
        marginTop={marginTop}
        display={display}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        marginBottom={marginBottom}
        padding={padding}
      >
        {props.children}
      </LineDown>
    </>
  );
}

export default lineDown;
