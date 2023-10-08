import React, { useState } from 'react';
import Block from '../../Components/Block';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import ModalServiceForm from './ModalServiceForm/ModalServiceForm';
import Modal from '../../Components/Modal';
import { useMediaQuery } from 'react-responsive'

function ServiceForm({}) {
  const [showModal, setShowModal] = useState(false);
  const breakpointOne = useMediaQuery({ maxWidth: 1100 });
  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          contentHeight="80%"
          marginTop="15%"
          marginBottom="15%"
        >
          <ModalServiceForm
            showModal={showModal}
            // serviceData={serviceData}
            // onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
      <Block display="flex" flexDirection={breakpointOne ? 'column' : 'row'} gap="2%" border="1px solid white" padding="20px">
        <Block width="50%">
          <Title fontSize={breakpointOne ? '25px' : '45px'} color="white" textAlign={breakpointOne ? 'center' : ''}>
            Нам надо поговорить....
          </Title>
          <Text color="white" fontSize="20px">
            Заполните форму, указав всё что хотите указать, а также вкратце опишите проект, чтобы
            беседа была более конструктивной. Мы свяжемся с вами сразу как допьём кофе, включим
            компьютер и прочтём письмо.
          </Text>
        </Block>
        <Block display="flex" justifyContent="center" alignItems="center" margin={breakpointOne ? '20px 0' : ''}>
          <Button
            display="block"
            onClick={() => setShowModal(true)}
            padding="0"
            color="#e28e10"
            minWidth={breakpointOne ? '150px' : '350px'}
            height="80px"
            minHeight="80px"
            fontSize="40px"
          >
            Заполнить форму
          </Button>
        </Block>
      </Block>
    </>
  );
}

export default ServiceForm;
