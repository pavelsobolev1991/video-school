import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ overlayHeight }) =>  overlayHeight || '100%'};
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  overflow: hidden; 
`;

const ModalContent = styled.div`
  width: 60%;
  margin-top:  ${({ marginTop }) =>  marginTop || ''};
  margin-bottom:  ${({ marginBottom }) =>  marginBottom || ''};
  height: ${({ contentHeight }) => contentHeight || '80%'};
  max-height: 600px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  overflow-y: auto; 
`;

const ModalCloseButton = styled.button`
  position: relative;
  left: 95%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

function Modal({ isOpen, onClose, overlayHeight, marginTop, marginBottom, contentHeight, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay overlayHeight={overlayHeight} >
      <ModalContent contentHeight={contentHeight} marginTop={marginTop} marginBottom={marginBottom}>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
