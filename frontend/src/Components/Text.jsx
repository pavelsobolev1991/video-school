import styled from 'styled-components';

const TextStyles = styled.nav`
  color: ${({ color }) => color || ''};
  font-size: ${({ fontSize }) => fontSize || ''};
`;

function Text({
  children, color, fontSize,
}) {
  return (
    <TextStyles
      color={color}
      fontSize={fontSize}
    >
      {children}
    </TextStyles>
  );
}

export default Text;
