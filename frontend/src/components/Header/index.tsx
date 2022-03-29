import React from 'react';
import { SHORT_MONTHS } from '../../constants';

function Header() {
  return (
    <header className='fixed h-16 pl-64 pr-8 w-full bg-white shadow-custom text-sm flex items-center justify-end'>
      <span className='font-bold'>{`${new Date().getDate()} ${
        SHORT_MONTHS[new Date().getMonth()]
      } ${new Date().getFullYear()}`}</span>
    </header>
  );
}

export default Header;
