import styled, { css } from 'styled-components';

const LinkStyles = styled.a`
  display: block;
  position: relative;
  font-family: ${({ font }) => font || ''};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    `}
`;

const Link = ({
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
  children,
}) => {
  console.log('background', background);
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
    >
      {title}
    </LinkStyles>
  );
};

export default Link;
