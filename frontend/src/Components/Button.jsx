import styled, {css} from 'styled-components';

const ButtonStyles = styled.div.attrs(attrs => ({
  disabled: attrs.disabled || false,
}))`
  display: flex;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || ''};
  padding: ${({ padding }) => padding || ''};
  text-decoration: none;
  cursor: pointer;

 

  button {
    min-width: ${({ minWidth }) => minWidth || '140px'};
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    color: #ebecf0; 
    min-height: 40px;
    border: none;
    outline: none;
    border-radius: 320px;
    padding: 6px 10px;
    background-color: #e28e10;
    cursor: pointer;    
  }
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
  padding,
  disabled
}) {
  return (
    <ButtonStyles>
      <button onClick={onClick} disabled={disabled}>{children}</button>
    </ButtonStyles>
  );
}

export default Button;
