import React from 'react';
import LineDown from '../../atoms/linedown'
import { HeaderSeparator, FlexSeparator } from './style.js';

function headerSeparator({
  text = ''
}) {
  return (
    <HeaderSeparator>
      <FlexSeparator>
      <LineDown
        marginTop={"10px"}
        width={"80%"}
        marginBottom={"10px"}
        height={"2px"}
        backgroundColor={"#b90000"}
      />
      <LineDown
        marginTop={"10px"}
        width={"20%"}
        marginBottom={"10px"}
        height={"2px"}
        backgroundColor={"#ffb71b"}
      />
      </FlexSeparator>
      <span>{text}</span>
    </HeaderSeparator>
  );
}

export default headerSeparator;
