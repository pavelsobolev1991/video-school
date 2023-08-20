import styled from 'styled-components';
import { useForm, useController, UseControllerProps } from 'react-hook-form';

const InputStyles = styled.div`
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

  input {
    height: 45px;
    border: 1px solid #d9d9d9;
    background-color: #f8f8f8;
    border-radius: 8px;
    font-size: 15px;
  }
`;

const InputErrorMessageStyles = styled.span`
  position: absolute;
  bottom: -10px;
  color: darkred;
  font-size: 12px;
`;

const InputTest = (props) => {
  const { validation, error, label, placeholder, type } = props;
  const { field } = useController(props);

  return (
    <>
      <InputStyles>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} {...field} {...validation} placeholder={placeholder} />
        {error && <InputErrorMessageStyles>{error?.message || 'Ошибка'}</InputErrorMessageStyles>}
      </InputStyles>
    </>
  );
};

export default InputTest;
