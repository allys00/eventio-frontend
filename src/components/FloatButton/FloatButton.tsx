import React from 'react';
import { styled } from '../../styles/theme';

interface IProps extends IWrapperProps {
  icon: () => JSX.Element;
  position: 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
  onClick: () => void;
}

interface IWrapperProps {
  background: string;
  width?: string;
  height?: string;
}

const FloatButtonWrapper = styled.button<IWrapperProps>`
  padding: 8px;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  border-radius: 50%;
  outline: none;
  border: none;
  position: fixed;
  &.left-bottom {
    left: 20px;
    bottom: 20px;
  }
  &.right-bottom {
    right: 20px;
    bottom: 20px;
  }
  &.left-top {
    left: 20px;
    top: 20px;
  }
  &.right-top {
    right: 20px;
    top: 20px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const FloatButton = ({
  icon: Icon,
  background,
  width,
  height,
  position,
  onClick
}: IProps): JSX.Element => (
  <FloatButtonWrapper
    className={`${position}`}
    background={background}
    width={width}
    height={height}
    onClick={onClick}
  >
    <Icon />
  </FloatButtonWrapper>
);

export default FloatButton;
