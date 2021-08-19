import styled from 'styled-components';

export type ButtonTypes =  'primary' | 'secondary' | 'tertiary'
interface IProps {
  colorType: ButtonTypes;
}

export const Button = styled.button<IProps>`
  background-color: ${({ theme, colorType }) => {
    return theme.actions[colorType].background;
  }};
  color: ${({ theme, colorType }) => {
    return theme.actions[colorType].contrast;
  }};
  border: 0;
  outline: none;
  width: 240px;
  height: 55px;
  font-weight: 600;
  border-radius: 4px;
  line-height: 32px;
  font-size: 16px;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  &:disabled {
    transform: unset;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
