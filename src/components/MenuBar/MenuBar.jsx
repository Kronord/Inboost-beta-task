import React from 'react';
import LengPath from './LengPath/LengPath';
import MainMenu from './MainMenu/MainMenu';
import TextForClient from './TextForClientPath/TextForClient';
import { MenuBarWrapper } from './MenuBar.styled';

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <LengPath />
      <MainMenu />
      <TextForClient />
      <div>
        <p>sdf</p>
      </div>
      <div>
        <p>sdf</p>
      </div>
      <div>
        <p>sdf</p>
      </div>
    </MenuBarWrapper>
  );
};

export default MenuBar;
