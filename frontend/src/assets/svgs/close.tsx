import React from 'react';
import { IconProps } from '../../interfaces/common';

const CloseIcon = ({ className }: IconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.4979 0.502103C24.1674 1.17157 24.1674 2.257 23.4979 2.92647L2.92647 23.4979C2.257 24.1674 1.17157 24.1674 0.502103 23.4979C-0.167368 22.8284 -0.167368 21.743 0.502103 21.0735L21.0735 0.502103C21.743 -0.167368 22.8284 -0.167368 23.4979 0.502103Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.502103 0.502103C1.17157 -0.167368 2.257 -0.167368 2.92647 0.502103L23.4979 21.0735C24.1674 21.743 24.1674 22.8284 23.4979 23.4979C22.8284 24.1674 21.743 24.1674 21.0735 23.4979L0.502103 2.92647C-0.167368 2.257 -0.167368 1.17157 0.502103 0.502103Z'
      />
    </svg>
  );
};
export default CloseIcon;
