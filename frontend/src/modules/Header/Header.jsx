import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import bxg from '../../assets/bxg.png';
import Block from '../../Components/Block';
import NavBlock from '../../Components/NavBlock';
import Link from '../../Components/Link';

function Header() {
  return (
    <Block
      bgColor="black"
      height="70px"
      padding="0 20px 0 20px"
      position="fixed"
      left="0"
      top="0"
      right="0"
    >
      <Block
        maxWidth="1720px"
        display="flex"
        flexDirection="row"
        height="100%"
        alignItems="center"
        margin="0 auto"
      >
        <p style={{ color: 'white', fontSize: '25px' }}>LOGO</p>
        <NavBlock display="flex" flexDirection="row" flex="1" justifyContent="flex-end">
          <Link title="Портфолио" />
          <Link title="Услуги" />
          <Link title="О студии" />
          <Link title="О школе" />
          <Link title="Блог" />
          <Link title="Контакты" />
        </NavBlock>
      </Block>
    </Block>
  );
}

export default Header;
