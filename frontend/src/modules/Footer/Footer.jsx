import React from 'react';
import Block from '../../Components/Block';
import Text from '../../Components/Text';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 760 });
  return (
      <Block
        display="flex"
        maxHeight={isMobile ? '200px' : ' 100px'}
        padding={isMobile ? '24px' : ''}
        bgColor="black"
        margin="0 auto"
        alignItems="center"
      >
        <Block
          maxWidth="100%"
          maxWidth="1920px"
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          flexWrap="wrap"
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          margin="0 auto"
          padding="0 40px"
        >
          <Block>
            <Text color="white" fontSize="20px">
              Trickster
            </Text>
          </Block>
          <Block>
            <Text color="white" fontSize={isMobile ? '20px' : '30px'} fontWeight="bold">
              trickster@mail.ru
            </Text>
          </Block>
          <Block margin="12px">
            <img src="../../src/assets/vk.png" />
            <img src="../../src/assets/behance.png" />
            <img src="../../src/assets/vimeo.png" />
            <img src="../../src/assets/youtube.png" />
          </Block>
        </Block>
      </Block>
  );
}

export default Footer;
