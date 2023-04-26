import styled from 'styled-components';

const TextStyles = styled.span`
  color: ${({ color }) => color || ''};
  font-size: ${({ fontSize }) => fontSize || ''};
  font-weight: ${({ fontWeight }) => fontWeight || ''};
`;

function Text({
  children, color, fontSize, fontWeight,
}) {
  return (
    <TextStyles
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TextStyles>
  );
}

export default Text;
