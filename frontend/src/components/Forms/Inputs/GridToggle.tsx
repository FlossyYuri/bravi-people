import React from 'react';
import GridIcon from '../../../assets/svgs/grid';
import ListIcon from '../../../assets/svgs/list';

interface GridToggleProp {
  className?: string;
  grid: boolean;
  toggle: () => void;
}

function GridToggle({ className = '', toggle, grid }: GridToggleProp) {
  return (
    <div
      className={`rounded-lg py-1 px-2 bg-main-input font-semibold text-white flex ${className}`}
    >
      <button
        onClick={toggle}
        className={`transition-all px-3 h-full rounded-lg py-2 flex-1 flex justify-center items-center ${
          grid ? 'shadow-custom bg-white' : 'bg-transparent'
        }`}
      >
        <GridIcon className='fill-main-text' />
      </button>
      <button
        onClick={toggle}
        className={`transition-all px-3 h-full rounded-lg flex-1 flex justify-center items-center ${
          !grid ? 'shadow-custom bg-white' : 'bg-transparent'
        }`}
      >
        <ListIcon className='fill-main-text' />
      </button>
    </div>
  );
}

export default GridToggle;
