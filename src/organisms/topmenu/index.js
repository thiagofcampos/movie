import React from 'react';
import Logotipo from '../../molecules/logotipo';
import { TopMenu, Contato } from './styles';
import { Link } from 'react-router-dom';
import MenuList from '../../molecules/menulist';

function topMenu({ logo, routeContato, routeHome }) {
  return (
    <TopMenu>
      <div className="container-menu" alt="logo">
        <Link to={routeHome}>
          <Logotipo
            logo={logo}
          />
        </Link>
        <Contato to={routeContato}>
          <div>
            <strong> </strong>
          </div>
        </Contato>
      </div>
      <MenuList />
    </TopMenu>
  );
}

export default topMenu;
