import styled from 'styled-components';

const TitleStyles = styled.h1`
  color: ${({ color }) => color || ''};
  font-size: ${({ fontSize }) => fontSize || ''};
  font-weight: ${({ fontWeight }) => fontWeight || ''};
  text-align: ${({ textAlign }) =>  textAlign || ''};
`;

function Title({
  children, color, fontSize, fontWeight,  textAlign
}) {
  return (
    <TitleStyles
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {children}
    </TitleStyles>
  );
}

export default Title;
