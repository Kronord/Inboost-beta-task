import React from 'react';
import { Header, LinkToBack, LinkText, CentralText, BtnBox, BtnText } from './AppHeader.styled';
import LeftArrow from '../../Images/LeftArrow.svg';
import { ReactSVG } from 'react-svg';
import Button from '@mui/material/Button';


const AppHeader = () => {
  return (
    <Header>
      <LinkToBack href="#">
        <ReactSVG src={LeftArrow} />
        <LinkText>Назад</LinkText>
      </LinkToBack>
      <CentralText>Перерейти у бот...</CentralText>
      <BtnBox>
        <Button variant="contained" style={{marginRight: "24px", backgroundColor:  "#2C7DFA"}}><BtnText>Тест</BtnText></Button>
        <Button variant="outlined" style={{borderColor: "#2C7DFA"}}><BtnText style={{color: "#2C7DFA"}}>Опублікувати в боті</BtnText></Button>
      </BtnBox>
    </Header>
  );
};

export default AppHeader;
