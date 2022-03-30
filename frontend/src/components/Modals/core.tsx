import React from 'react';

interface Props {
  children: React.ReactNode;
}
function ModalCore({ children }: Props) {
  return (
    <div className='fade-spawn bg-slate-700 bg-opacity-40 w-screen h-screen fixed top-0 left-0 z-20 flex items-center justify-center text-main-text'>
      {children}
    </div>
  );
}

export default ModalCore;
