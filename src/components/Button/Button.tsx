import styled from 'styled-components';

interface IProps {
  colorType: 'primary' | 'secondary';
}

export const Button = styled.button<IProps>`
  background-color: ${(props) => {
    return props.colorType === 'primary'
      ? props.theme.color.primary_action
      : props.theme.color.secondary_action;
  }};
  border: 0;
  outline: none;
  width: 240px;
  height: 55px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  border-radius: 4px;
  line-height: 32px;
  font-size: 16px;
  &:hover{
    transform: scale(1.02);
    cursor: pointer;
  }
  &:disabled {
    transform: unset;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
