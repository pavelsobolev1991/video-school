import React from 'react';
import Block from '../../Components/Block';

function Footer() {
  return (
    <Block display="flex" maxHeight="100px" height="100px" bgColor="black">
      <Block
        maxWidth="100%"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        margin="0 auto"
        padding="0 20px"
      >
        <p style={{ color: 'white', fontSize: '20px' }}>Valentin Baranov</p>
        <p style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}>valentinbaranov@mail.ru</p>
        <div>
          <img src="../../src/assets/vk.png" />
          <img src="../../src/assets/behance.png" />
          <img src="../../src/assets/vimeo.png" />
          <img src="../../src/assets/youtube.png" />
        </div>
      </Block>
    </Block>
  );
}

export default Footer;
