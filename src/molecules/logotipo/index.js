import React from 'react';
import Image from '../../atoms/image';
import {LogoTipo} from './style.js';



function logotipo({logo}) {
  return (
    <LogoTipo>
      <Image 
          url={logo}
          />
      <span>HaveMovie</span>    
    </LogoTipo>
  );
}

export default logotipo;
