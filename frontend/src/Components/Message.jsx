import styled from 'styled-components';
import success from '../assets/success.png';
import Block from './Block';
import Text from './Text';

function MessageSuccess({ serviceData }) {
  return (
    <Block
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="10% 0 0 0"
    >
      <img src={success} alt="" width="200px" height="200px" />
      <Text fontSize="30px">
        {serviceData
          ? `Услуга ${serviceData.category + `/` + serviceData.title} успешна заказана`
          : 'Мы с вами свяжемся в ближайшее время'}
      </Text>
    </Block>
  );
}

export default MessageSuccess;
