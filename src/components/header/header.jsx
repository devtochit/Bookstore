import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  DivCont, NavTag, LinksDiv, LogoH1, Ul, MenuDiv, UserIcon, MenuItem,
} from './headerStyles';

function Nav() {
  const [navIcon, setNavIcon] = useState(true);

  const handleMenu = () => {
    setNavIcon((prev) => !prev);
  };
  return (
    <NavTag>
      <DivCont>
        <LinksDiv>
          <LogoH1 className="logo">Bookstore CMS</LogoH1>
          <Ul>
            <MenuItem className="nav-link">
              <NavLink to="/">Books</NavLink>
            </MenuItem>
            <MenuItem className="nav-link">
              <NavLink to="/Categories">Categories</NavLink>
            </MenuItem>
          </Ul>
        </LinksDiv>
        <UserIcon>
          <span><FaUserCircle /></span>
          <MenuDiv onClick={handleMenu}>
            {navIcon ? <AiOutlineMenu /> : <AiOutlineCloseCircle />}
          </MenuDiv>
        </UserIcon>
      </DivCont>
    </NavTag>
  );
}

export default Nav;
