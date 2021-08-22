import { css } from 'styled-components';
import { styled } from '../../styles/theme';

interface ILabelProps {
  goToTop: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  .inputMask {
    border: 0;
    border-bottom: 2px solid #dae1e7;
    outline: none;
    padding: 8px 0;
    z-index: 1;
    background: transparent;
    color: ${({ theme }) => theme.color.primary};
    font-size: 18px;

    &::placeholder {
      color: #c9ced3;
    }

    &.hadError {
      border-bottom-color: ${({ theme }) => theme.actions.secondary.background};
    }
  }
`;

export const Label = styled.label<ILabelProps>`
  position: absolute;
  color: #c9ced3;
  padding: 8px 0;
  top: 0;
  transition: all 0.3s;
  ${(props) =>
    props.goToTop &&
    css`
      top: -30px;
    `};
`;

export const EyeButton = styled.div`
  position: absolute;
  display: flex;
  right: 8px;
  top: 15px;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const HidePassword = styled.span`
  display: block;
  height: 24px;
  width: 2px;
  background-color: ${({ theme }) => theme.color.ligth_grey};
  position: absolute;
  transform: rotate(45deg);
  top: -2px;
  left: 9px;
`;

export const InputErrorMessage = styled.p`
  color: ${({ theme }) => theme.actions.secondary.background};
  margin-bottom: 0;
  text-align: left;
`;
