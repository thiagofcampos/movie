import React from 'react';
import {LogoTipo} from './style.js';



function logotipo({logo}) {
  return (
    <LogoTipo>
      <img 
          src={logo}
          alt="imagem"
          /> 
    </LogoTipo>
  );
}

export default logotipo;
