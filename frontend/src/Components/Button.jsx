import styled, {css} from 'styled-components';

const ButtonStyles = styled.div.attrs(attrs => ({
  disabled: attrs.disabled || false,
}))`
  display: ${({ display }) => display || 'flex'};
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || ''};
  padding: ${({ padding }) => padding || ''};
  text-decoration: none;
  cursor: pointer;

 

  button {
    min-height: ${({ minHeight }) => minHeight  || '40px'};
    min-width: ${({ minWidth }) => minWidth || '140px'};
    height: ${({ height }) => height || ''};
    transition: all 0.2s ease-in-out;
    font-size: ${({ fontSize }) => fontSize || '18px'};
    color: #ebecf0; 
    border: none;
    outline: none;
    border-radius: 320px;
    padding: ${({ padding }) => padding || '6px 10px'}; ;
    background-color: #e28e10;
    cursor: pointer;    
  }
`;

function Button({
  display,
  fontSize,
  to,
  title,
  position,
  color,
  font,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  marginLeft,
  children,
  onClick,
  padding,
  disabled
}) {
  return (
    <ButtonStyles display={display} height={height} minWidth={minWidth}>
      <button onClick={onClick} padding={padding} fontSize={fontSize} disabled={disabled} minWidth={minWidth} minHeight={minHeight} height={height}>{children}</button>
    </ButtonStyles>
  );
}

export default Button;
