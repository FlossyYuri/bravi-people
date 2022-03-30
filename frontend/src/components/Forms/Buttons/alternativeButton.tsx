import React from 'react';
import { ButtonInterface } from '../../../interfaces/common';

function AlternativeButton({
  children,
  className,
  onClick,
  active,
}: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      className={`px-8 rounded-lg py-2 bg-main-input font-semibold hover:text-main-blue hover:fill-main-blue ${className} ${
        active
          ? 'text-main-blue fill-main-blue'
          : 'text-main-text fill-main-text'
      }`}
    >
      {children}
    </button>
  );
}

export default AlternativeButton;
