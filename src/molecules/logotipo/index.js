import React from 'react';
import Image from '../../atoms/image';

const logo = "/static/media/logo.8583fd34.png"

function logotipo() {
  return (
    <div>
      <Image 
          url={logo}
          />
    </div>
  );
}

export default logotipo;
