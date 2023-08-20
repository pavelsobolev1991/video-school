import React from 'react';
import styled from 'styled-components';
import InputErrorMessage from './InputErrorMessage';

const TextFieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 20px;
  position: relative;
  padding-bottom: 4px;

  label {
    display: flex;
    margin-bottom: 2px;
    font-size: 14px;
  }

  textarea {
    height: 100px;
    border: 1px solid #d9d9d9;
    background-color: #f8f8f8;
    border-radius: 8px;
    font-size: 15px;
    padding: 8px;
    resize: vertical;
  }
`;

const TextField = ({
  name,
  placeholder = '',
  label = null,
  register = () => {},
  options = {},
  errorMessage = '',
  ...attributes
}) => {
  return (
    <TextFieldStyles>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        {...register(name, options)}
        {...attributes}
      />
      {errorMessage && <InputErrorMessage text={errorMessage} />}
    </TextFieldStyles>
  );
};

export default TextField;