import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Contato } from './styles';

function header() {
  return (
    <Header >
      <div className="container-menu" alt="logo">
        <Link to='/'>
          
        </Link>
        <Contato to='/contato'>
          <div>
            <strong> Contato</strong>
          </div>
        </Contato>
      </div>
      <div className="line-down" />
    </Header>
  );
}

export default header
