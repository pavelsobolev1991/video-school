import styled, { css } from 'styled-components';
import { BlockHover } from '../modules/ProjectList/ProjectList';

const StyledBlock = styled.div`
  display: ${({ display }) => display || 'block'};
  position: ${({ position }) => position || 'static'};
  left: ${({ left }) => left || ''};
  top: ${({ top }) => top || ''};
  right: ${({ right }) => right || ''};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
  box-sizing: ${({ boxSizing }) => boxSizing || 'content-box'};
  flex: ${({ flex }) => flex || ''};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  overflow: ${({ overflow }) => overflow || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  color: ${({ color }) => color || ''};

  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-repeat: no-repeat;
      background-size: 100%;
    `}

  ${(height) =>
    height &&
    css`
      height: ${height};
    `}
  
  ${(width) =>
    width &&
    css`
      width: ${width};
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
        }
      }
    `}
`;

function Block({
  display,
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  bgColor,
  background,
  boxSizing,
  width,
  height,
  minWidth,
  maxHeight,
  margin,
  overflow,
  padding,
  position,
  children,
  fontSize,
  color,
  left,
  top,
  right,
  hasHover,
}) {
  return (
    <StyledBlock
      display={display}
      flex={flex}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      bgColor={bgColor}
      background={background}
      boxSizing={boxSizing}
      width={width}
      height={height}
      margin={margin}
      minWidth={minWidth}
      maxHeight={maxHeight}
      overflow={overflow}
      padding={padding}
      fontSize={fontSize}
      color={color}
      position={position}
      left={left}
      top={top}
      right={right}
      hasHover={hasHover}
    >
      {children}
    </StyledBlock>
  );
}

export default Block;
