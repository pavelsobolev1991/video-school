import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  overflow: hidden; 
`;

const ModalContent = styled.div`
  width: 60%;
  height: 80%;
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

// const ModalContentScroll = styled.div`
//   height: 100%;
//   overflow-y: auto;
// `;

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        {/* <ModalContentScroll> */}
        {children}
        {/* </ModalContentScroll> */}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
