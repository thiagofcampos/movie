import React from 'react';
import Logotipo from '../../molecules/logotipo';
import { TopMenu, Contato } from './styles';
import { Link } from 'react-router-dom'

function topMenu({logo}) {
  return (
    <TopMenu>
      <div className="container-menu" alt="logo">
        <Link to='/'>
          <Logotipo
            logo={logo}
          />
        </Link>
        <Contato to='/contato'>
          <div>
            <strong> Contato</strong>
          </div>
        </Contato>
      </div>
      <div className="line-down" />
    </TopMenu>
  );
}

export default topMenu;
