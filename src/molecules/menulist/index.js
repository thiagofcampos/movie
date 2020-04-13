import React from 'react';
import { MenuList } from './style.js';
import { MenuRoute } from '../../RouteArray';
import { Link } from 'react-router-dom';

function menuList() {
  return (
    <MenuList>
      {
        MenuRoute.map((item) => {
          return (
            <Link to={item.pathName}>
              <div className={"button-menu"}>
                <span>{item.name}</span>
              </div>
            </Link>
          )
        })
      }
    </MenuList>
  );
}

export default menuList;
