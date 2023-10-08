import React from 'react';
import styled, { css } from 'styled-components';

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  font-size: 24px;
  z-index: 5;
  cursor: pointer;

  ${(props) => props.direction === 'left' && css`
    left: 10px;
    &:before {
      content: '\\2190';
      position: relative;
      top: -4px;
      display: block;
      font-weight: bold;
    }
  `}

  ${(props) => props.direction === 'right' && css`
    right: 10px;
    &:before {
      content: '\\2192';
      position: relative;
      top: -4px;
    }
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export default ArrowButton;
