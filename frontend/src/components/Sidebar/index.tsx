import React from 'react';
import DashboardIcon from '../../assets/svgs/dashboard';
import PeopleIcon from '../../assets/svgs/people';
import BraviLogo from '../../assets/images/bravi-logo.jpg';
import Link from './Link';
import './menu.css';

function Sidebar() {
  return (
    <header className='fixed bg-white left-0 h-screen w-64 shadow'>
      <img
        className='rounded-full w-40 mx-auto mt-12'
        src={BraviLogo}
        alt='Logotipo da Empresa Bravi'
      />
      <h1 className='text-center text-xl font-bold'>Bravi People</h1>
      <ul className='mt-12'>
        <Link to='/contacts'>
          <PeopleIcon /> Contacts
        </Link>
        <Link to='/dashboard'>
          <DashboardIcon /> Dashboard
        </Link>
      </ul>
    </header>
  );
}

export default Sidebar;
