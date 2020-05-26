import React from 'react';
import LineDown from '../../atoms/linedown'
import { HeaderSeparator } from './style.js';

function headerSeparator({
  text = ''
}) {
  return (
    <HeaderSeparator>
      <LineDown
        marginTop={"0px"}
        marginBottom={"0px"}
        height={"2px"}
        backgroundColor={"#b90000"}
      >
      </LineDown>
      <span>{text}</span>
    </HeaderSeparator>
  );
}

export default headerSeparator;
