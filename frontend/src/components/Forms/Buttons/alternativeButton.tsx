import React from 'react';
import { ButtonInterface } from '../../../interfaces/common';

function AlternativeButton({ children, className, onClick }: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      className={`px-8 rounded-lg py-2 bg-main-input font-semibold text-main-text fill-main-text hover:text-main-blue hover:fill-main-blue ${className}`}
    >
      {children}
    </button>
  );
}

export default AlternativeButton;
