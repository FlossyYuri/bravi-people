import React from 'react';
import DashboardIcon from '../../assets/svgs/dashboard';
import PeopleIcon from '../../assets/svgs/people';
import BraviLogo from '../../assets/images/bravi-logo.jpg';
import Link from './Link';
import './menu.css';
import CloseIcon from '../../assets/svgs/close';

interface Props {
  closeSidebar: () => void;
  sidebar: boolean;
}
function Sidebar({ closeSidebar, sidebar }: Props) {
  return (
    <aside
      className={`transition-all fixed bg-white lg:left-0 h-screen w-64 shadow-custom z-20 ${
        sidebar ? 'left-0' : '-left-64'
      }`}
    >
      <button
        type='button'
        onClick={closeSidebar}
        className='absolute right-6 top-6 fill-main-text scale-75'
      >
        <CloseIcon />
      </button>
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
    </aside>
  );
}

export default Sidebar;
