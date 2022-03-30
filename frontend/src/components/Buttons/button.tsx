import React from 'react';
import { ButtonInterface } from '../../interfaces/common';

function Button({ children, onClick }: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      className='px-8 rounded-lg py-2 bg-main-blue font-semibold text-white'
    >
      {children}
    </button>
  );
}

export default Button;
