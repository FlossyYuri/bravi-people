import React from 'react';
import ListIcon from '../../assets/svgs/list';
import { SHORT_MONTHS } from '../../constants';

interface Props {
  openSidebar: () => void;
}
function Header({ openSidebar }: Props) {
  return (
    <header className='fixed z-10 h-16 pl-8 lg:pl-64 pr-8 w-full bg-white shadow-custom text-sm flex items-center justify-between lg:justify-end'>
      <button
        onClick={openSidebar}
        className='transition-all bg-main-input px-3 py-3 rounded-lg fill-main-text hover:bg-white hover:shadow-lg lg:hidden'
      >
        <ListIcon />
      </button>
      <span className='font-bold'>{`${new Date().getDate()} ${
        SHORT_MONTHS[new Date().getMonth()]
      } ${new Date().getFullYear()}`}</span>
    </header>
  );
}

export default Header;
