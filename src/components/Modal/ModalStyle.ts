import { styled } from '../../styles/theme';

export const ModalWrapper = styled.section`
  width: calc(100vw - 64px);
  height: calc(100vh - 64px);
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.background};
  padding: 32px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 48px;
  color: ${({ theme }) => theme.color.primary};
  svg {
    margin-top: -3px;
    margin-right: 5px;
  }

  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ModalContent = styled.article`
  height: calc(100% - 50px);
  overflow: auto;
`;
