import styled, { css } from 'styled-components';
import { BlockHover } from '../modules/ProjectList/ProjectList';

const LinkStyles = styled.a`
  display: block;
  position: relative;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: ${({ marginLeft }) => marginLeft || '30px'};;
  cursor: pointer;

  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    `}
    ${({ hasHover }) =>
    hasHover &&
    css`
      &:hover {
        ${BlockHover} {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          z-index:10;
        }
      }
    `}
`;

function Link({
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
  // function handleClick(event) {
  //   if (onClick) {
  //     console.log('test click')
  //   }
  // }

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
    </LinkStyles>
  );
}

export default Link;
