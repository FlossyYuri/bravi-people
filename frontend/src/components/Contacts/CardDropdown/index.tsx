import React, { useEffect, useMemo, useRef, useState } from 'react';

interface ContextItems {
  onClick: () => void;
  text: string;
  icon: JSX.Element;
}

interface DropdownProps {
  parentRef: React.RefObject<HTMLButtonElement>;
  visibility: boolean;
  close: () => void;
  items: ContextItems[];
}
const CardDropdown = ({
  parentRef,
  visibility,
  close,
  items,
}: DropdownProps) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibility) {
      window.addEventListener('click', close);
      setX(parentRef.current?.offsetLeft || 0);
      setY(parentRef.current?.offsetTop || 0);
    }
    return function cleanup() {
      window.removeEventListener('click', close);
    };
  }, [visibility, close, parentRef]);

  const style = useMemo(
    () => ({
      top: y,
      left: x - (dropdownRef.current?.offsetWidth || 0) - 8,
    }),
    [y, x]
  );

  return visibility ? (
    <div
      ref={dropdownRef}
      className='grow-spawn fixed z-20 rounded-lg p-2 w-fit bg-main-BG shadow-lg min-w-dropdown max-w-dropdown'
      style={style}
    >
      {items.map((item, index) => {
        return (
          <button
            key={index}
            onClick={item.onClick}
            className='group transition-all w-full px-4 py-2 flex items-center hover:bg-main-blue rounded-lg hover:text-white'
          >
            {item.icon}
            <span className='ml-2'>{item.text}</span>
          </button>
        );
      })}
    </div>
  ) : null;
};

export default CardDropdown;
