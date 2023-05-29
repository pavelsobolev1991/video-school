import styled from 'styled-components';

const InputErrorMessageStyles = styled.span`
  position: absolute;
  bottom: -10px;
  color: darkred;
  font-size: 12px;
`;

const InputErrorMessage = ({ text }) => (
  <InputErrorMessageStyles>{text}</InputErrorMessageStyles>
);

export default InputErrorMessage;
