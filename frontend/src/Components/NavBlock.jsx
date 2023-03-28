import styled from 'styled-components';

const NavBlockStyles = styled.nav`
  display: ${({ display }) => display || 'block'};
  flex: ${({ flex }) => flex || ''};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  list-style-type: none;
`;

const NavBlock = ({ children, display, flex, flexDirection, justifyContent }) => (
  <NavBlockStyles
    flex={flex}
    flexDirection={flexDirection}
    display={display}
    justifyContent={justifyContent}
  >
    {children}
  </NavBlockStyles>
);

export default NavBlock;
