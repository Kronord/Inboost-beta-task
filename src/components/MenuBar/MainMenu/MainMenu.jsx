import React from "react";
import { ReactSVG } from 'react-svg';
import Menu from '../../../Images/Menu.svg';
import { MainMenuBox, MenuTitle, MenuText } from "./MainMenu.styled";

const MainMenu = () => {
    return <MainMenuBox>
    <ReactSVG src={Menu} style={{ marginRight: '10px' }} />
    <div>
      <MenuTitle>Головне меню</MenuTitle>
      <MenuText>
        Текст і кнопки основних функцій, які постійно відображатимуться при
        відкритті чату з ботом
      </MenuText>
    </div>
  </MainMenuBox>
};

export default MainMenu;