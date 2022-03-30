import React, { useState } from 'react';
import GridIcon from '../../../assets/svgs/grid';
import ListIcon from '../../../assets/svgs/list';

interface GridToggleProp {}

function GridToggle({}: GridToggleProp) {
  const [grid, setToggle] = useState<boolean>(true);
  return (
    <div className='rounded-lg py-1 px-2 bg-main-input font-semibold text-white flex'>
      <button
        onClick={() => setToggle(true)}
        className={`transition-all px-3 h-full rounded-lg ${
          grid ? 'shadow-custom bg-white' : 'bg-transparent'
        }`}
      >
        <GridIcon className='fill-main-text' />
      </button>
      <button
        onClick={() => setToggle(false)}
        className={`transition-all px-3 h-full rounded-lg ${
          !grid ? 'shadow-custom bg-white' : 'bg-transparent'
        }`}
      >
        <ListIcon className='fill-main-text' />
      </button>
    </div>
  );
}

export default GridToggle;
