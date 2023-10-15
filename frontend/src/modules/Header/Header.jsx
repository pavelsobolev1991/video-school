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
      padding="0 40px 0 40px"
      left="0"
      top="0"
      right="0"
      zIndex="10"
    >
      <Block
        maxWidth="1920px"
        display="flex"
        flexDirection="row"
        height="100%"
        alignItems="center"
        margin="0 auto"
      >
        <RouterLink color="white" to={'/'}><p style={{ color: 'white', fontSize: '25px' }}>Trickster</p></RouterLink>
        <NavBlock display="flex" flexDirection="row" flex="1" justifyContent="flex-end">
          <RouterLink color="white" to={'/'}>Портфолио</RouterLink>
          <RouterLink color="white" marginLeft="30px"  to={'/uslugi'} title="Услуги">Услуги</RouterLink>
          {/* <Link href="#" title="О студии" />
          <Link href="#" title="О школе" />
          <Link href="#" title="Блог" />
          <Link href="#" title="Контакты" /> */}
        </NavBlock>
      </Block>
    </Block>
  );
}

export default Header;
