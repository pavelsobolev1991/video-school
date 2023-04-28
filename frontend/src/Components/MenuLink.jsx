import styled, { css } from 'styled-components';
import Link from './Link';

const LinkStyles = styled.a`
  display: block;
  position: relative;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || '30px'};
  cursor: pointer;

  &:hover {
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
  padding-top: 30px;
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 40px 0;
`;

function MenuLink({
  href,
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
  return (
    <LinkStyles
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
      onClick={onClick}
    >
      {title}
      {title === 'Услуги' && (
        <Submenu className="submenu">
          <MenuItem href="#" title="3D ролики" />
          <MenuItem href="#" title="Моушн-дизайн" />
          <MenuItem href="#" title="Арты" />
        </Submenu>
      )}
    </LinkStyles>
  );
}

export default MenuLink;
