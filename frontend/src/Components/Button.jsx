import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: flex;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || '30px'};
  text-decoration: none;
  cursor: pointer;
`;

function Button({
  to,
  title,
  position,
  color,
  font,
  width,
  height,
  maxWidth,
  minHeight,
  marginLeft,
  children,
  onClick,
}) {
  return (
    <ButtonStyles>
      <button onClick={onClick}>{children}</button>
    </ButtonStyles>
  );
}

export default Button;
