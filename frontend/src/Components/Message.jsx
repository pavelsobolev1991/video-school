import styled from 'styled-components';
import success from '../assets/success.png';
import Block from './Block';
import Text from './Text';

function MessageSuccess({ serviceData }) {
  console.log('MessageSuccess serviceData', serviceData)
  return (
    <Block
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="10% 0 0 0"
    >
      <img src={success} alt="" width="200px" height="200px" />
      <Text fontSize="30px">Услуга {serviceData.category+`/`+serviceData.title} успешна заказана</Text>
    </Block>
  );
}

export default MessageSuccess;
