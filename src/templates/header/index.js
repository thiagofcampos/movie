import React from 'react';
import TopMenu from '../../organisms/topmenu';
import imagem from '../../assets/logo.png'
import LineDown from '../../atoms/linedown'

const logo = imagem;
const routeHome = '/';
const routeContato = '/contato'
function header() {
  return (
    <div>
      <TopMenu
        logo={logo}
        routeHome={routeHome}
        routeContato={routeContato}
      />
      <LineDown
        marginTop={"0px"}
        marginBottom={"0px"}
        height={"20px"}
        backgroundColor={"#b90000"}
      />
    </div>
  );
}

export default header
