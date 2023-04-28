import React from 'react';
import Block from '../../Components/Block';
import NavBlock from '../../Components/NavBlock';
import Link from '../../Components/Link';
import MenuLink from '../../Components/MenuLink';

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
      zIndex="10"
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
          <Link href="#" title="Портфолио" />
          <MenuLink href="#" title="Услуги" />
          <Link href="#" title="О студии" />
          <Link href="#" title="О школе" />
          <Link href="#" title="Блог" />
          <Link href="#" title="Контакты" />
        </NavBlock>
      </Block>
    </Block>
  );
}

export default Header;
