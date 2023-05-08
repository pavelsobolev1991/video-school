import { isFunction } from 'lodash';
import styled from 'styled-components';

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

const Input = ({
  name,
  type = 'text',
  placeholder = '',
  label = null,
  register = () => {},
  options = {},
  errorMessage = '',
  renderCustomInput,
  attributes = {}
}) => {
  const { required } = options;
  return (
    <InputStyles>
      {label && (
        <label htmlFor={name}>
        </label>
      )}
      {renderCustomInput && isFunction(renderCustomInput) ? (
        renderCustomInput()
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...register(name, options)} // eslint-disable-line react/jsx-props-no-spreading
          {...attributes} // eslint-disable-line react/jsx-props-no-spreading
        />
      )}
    </InputStyles>
  );
};

export default Input;
