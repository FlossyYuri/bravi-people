import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

interface LinkInterface {
  to: string;
  children: React.ReactNode;
}
function Link({ to, children }: LinkInterface) {
  return (
    <li>
      <NavLink className='nav-link w-full block py-4 px-6 flex' to={to}>
        {children}
      </NavLink>
    </li>
  );
}

export default Link;
