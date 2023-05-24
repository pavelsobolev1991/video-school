import React from 'react';
import Block from '../../Components/Block';
import NavBlock from '../../Components/NavBlock';
import Link from '../../Components/Link';
import RouterLink from '../../Components/RouterLink';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Block
      bgColor="black"
      height="75px"
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
        <p style={{ color: 'white', fontSize: '25px' }}>Trickster</p>
        <NavBlock display="flex" flexDirection="row" flex="1" justifyContent="flex-end">
          <RouterLink color="white" to={'/'}>Портфолио</RouterLink>
          <RouterLink color="white" to={'/uslugi'} title="Услуги">Услуги</RouterLink>
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
