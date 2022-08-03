import React from 'react';
import { BarWrapp, SvgBox, List, Item, Line, AccLink, Link } from './AppBar.styled';
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
          <Link href='#'>
            <ReactSVG src={Home} />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <ReactSVG src={Robot} />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <ReactSVG src={Contact} />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <ReactSVG src={People} />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <ReactSVG src={Place} />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <ReactSVG src={Settings} />
          </Link>
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
