import styled from 'styled-components';
import Block from './Block';
import Button from './Button';
import Text from './Text';

function ServiceCard({
  title, category, description, price, children, onClick,setShowModal,setServiceData
}) {
  const handleServiceClick = (title,category) => {
    setServiceData({title, category})
    setShowModal(true);
  };
  return (
    <Block
      display="flex"
      flexDirection="column"
      border="1px solid white"
      margin="20px 0 0 0"
      padding="20px"
      justifyContent="center"
      alignItems="center"
    >  
      <Text color="white" fontSize="20px">{title}</Text>
      <Text color="white">{description}</Text>
      <Text fontSize="30px" color="white">{price}</Text>
      <Button color="#e28e10" padding="14px 70px" onClick={()=>handleServiceClick(title, category)}>Заказать услугу</Button>
      {children}
    </Block>
  );
}

export default ServiceCard;
