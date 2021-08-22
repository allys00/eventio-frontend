import React from 'react';
import { theme } from '../../styles/theme';
import IconClose from '../Icon/IconClose';
import IconLogo from '../Icon/IconLogo';
import {
  CloseButton,
  ModalContent,
  ModalHeader,
  ModalWrapper,
} from './ModalStyle';

interface IProps {
  children: JSX.Element;
  onClose: () => void;
}

function Modal({ children, onClose }: IProps) {
  return (
    <ModalWrapper>
      <ModalHeader>
        <IconLogo width={30} height={30} color={theme.color.primary} />
        <CloseButton onClick={onClose}>
          <IconClose width={20} height={20} color={theme.color.primary} />
          Close
        </CloseButton>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
