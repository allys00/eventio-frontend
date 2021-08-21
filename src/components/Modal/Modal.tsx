import React from 'react';
import { theme } from '../../styles/theme';
import IconClose from '../Icon/IconClose';
import IconLogo from '../Icon/IconLogo';
import { CloseButton, ModalContent, ModalHeader, ModalWrapper } from './ModalStyle';

interface IProps {
  children: JSX.Element
}

function Modal({children}:IProps) {
  return (
    <ModalWrapper>
      <ModalHeader>
        <IconLogo width={30} height={30} color={theme.color.primary} />
        <CloseButton>
          <IconClose width={20} height={20} color={theme.color.primary} />
          Close
        </CloseButton>
      </ModalHeader>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
