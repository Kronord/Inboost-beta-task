import React from 'react';
import { BarWrapp, SvgBox, List, Item, Line, AccLink } from './AppBar.styled';
import Logo from '../../Images/Logo.svg';
import Account from '../../Images/Account.svg';
import Contact from '../../Images/Contact.svg';
import Home from '../../Images/Home.svg';
import People from '../../Images/People.svg';
import Place from '../../Images/Place.svg';
import Settings from '../../Images/Settings.svg';
import Robot from '../../Images/Robot.svg';
import { ReactSVG } from 'react-svg';

const AppBar = () => {
  return (
    <BarWrapp>
      <SvgBox href='#'>
        <ReactSVG src={Logo} />
      </SvgBox>
      <List>
        <Item>
          <a href='#'>
            <ReactSVG src={Home} />
          </a>
        </Item>
        <Item>
          <a href="#">
            <ReactSVG src={Robot} />
          </a>
        </Item>
        <Item>
          <a href="#">
            <ReactSVG src={Contact} />
          </a>
        </Item>
        <Item>
          <a href="#">
            <ReactSVG src={People} />
          </a>
        </Item>
        <Item>
          <a href="#">
            <ReactSVG src={Place} />
          </a>
        </Item>
        <Item>
          <a href="#">
            <ReactSVG src={Settings} />
          </a>
        </Item>
      </List>
      <Line />
      <AccLink href="#">
        <ReactSVG src={Account} />
      </AccLink>
    </BarWrapp>
  );
};

export default AppBar;
