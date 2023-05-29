import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const LinkStyles = styled(Link)`
  display: block;
  position: relative;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || '30px'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: red;
    .submenu {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const Submenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -30px;
  width: 200px;
  height: 150px;
  background-color: black;
  padding: 30px 10px 0 0px;
`;
function RouterLink({
  to,
  title,
  position,
  color,
  font,
  background,
  width,
  height,
  maxWidth,
  minHeight,
  marginLeft,
  children,
  hasHover,
  onClick,
}) {
  const navigate = useNavigate();
  const handleLinkClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <LinkStyles
      to={to}
      position={position}
      color={color}
      font={font}
      background={background}
      width={width}
      height={height}
      maxWidth={maxWidth}
      minHeight={minHeight}
      marginLeft={marginLeft}
      hasHover={hasHover}
      onClick={(event)=> handleLinkClick(event)}
      title={title}
    >
      {children}
    </LinkStyles>
  );
}

export default RouterLink;