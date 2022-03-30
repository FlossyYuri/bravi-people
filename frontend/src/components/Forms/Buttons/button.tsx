import React from 'react';
import { ButtonInterface } from '../../../interfaces/common';

function Button({ children, type = 'button', onClick, alt }: ButtonInterface) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 rounded-lg py-2 font-semibold min-w-button ${
        alt
          ? 'border-2 border-main-text text-main-text'
          : 'bg-main-blue text-white shadow-custom'
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
