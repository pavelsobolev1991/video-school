import styled from 'styled-components';

const TitleStyles = styled.h1`
  color: ${({ color }) => color || ''};
  font-size: ${({ fontSize }) => fontSize || ''};
  font-weight: ${({ fontWeight }) => fontWeight || ''};
`;

function Title({
  children, color, fontSize, fontWeight, 
}) {
  return (
    <TitleStyles
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TitleStyles>
  );
}

export default Title;
