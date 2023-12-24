import { useState } from 'react';

import { Drawer } from './Drawer';
import { HamburguerMenuIcon } from './HamburguerMenuIcon';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isDrawerClosing, setIsDrawerClosing] = useState<boolean>(false);

  const [isHamburgerMenuPressed, setIsHamburguerMenuPressed] =
    useState<boolean>(false);

  const handleToggleDrawer = () => {
    setIsHamburguerMenuPressed((prev) => !prev);
    if (isDrawerOpen) {
      setIsDrawerClosing(true);
      setTimeout(() => {
        setIsDrawerOpen(false);
      }, 490);
    } else {
      setIsDrawerClosing(false);
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className="flex h-14 w-full flex-row items-center justify-between bg-red-500 px-2">
      <HamburguerMenuIcon
        className="z-40"
        isPressed={isHamburgerMenuPressed}
        onClick={handleToggleDrawer}
      />
      <div>Nombre de pagina</div>
      <div>Logo</div>

      {isDrawerOpen ? (
        <Drawer
          handleToggleDrawer={handleToggleDrawer}
          isDrawerClosing={isDrawerClosing}
        />
      ) : null}
    </div>
  );
};
