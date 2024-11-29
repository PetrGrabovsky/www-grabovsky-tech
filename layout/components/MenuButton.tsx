import { HTMLAttributes } from 'react';

import MenuIcon from './MenuIcon';

interface MenuButtonProperties extends HTMLAttributes<HTMLElement> {
  isNavOpen: boolean;
}

const MenuButton = ({ isNavOpen, onClick }: MenuButtonProperties) => {
  return (
    <div className='h-full w-auto py-2'>
      <button className='h-full w-auto' onClick={onClick}>
        <MenuIcon isCross={isNavOpen} />
      </button>
    </div>
  );
};

export default MenuButton;
