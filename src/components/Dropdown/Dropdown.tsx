import React, { useCallback, useState } from 'react';
import { theme } from '../../styles/theme';
import IconArrow from '../Icon/IconArrow';
import {
  DropdownOption,
  DropdownWrapper,
  OptionsWrapper,
} from './DropdownStyle';

interface IProps {
  children?: any;
  hideIcon?: boolean;
  iconColor?: string;
  options: {
    label: string;
    onClick: () => void;
  }[];
}

function Dropdown({ options, children, hideIcon, iconColor}: IProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const hideMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);
  console.log(menuIsOpen)
  return (
    <DropdownWrapper onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      {children}{' '}
      {!hideIcon && (
        <IconArrow width={16} height={16} color={iconColor || theme.color.secondary} />
      )}
      {menuIsOpen && (
        <OptionsWrapper>
          {options.map(({ label, onClick }) => (
            <DropdownOption onClick={() => onClick()} key={label}>
              {label}
            </DropdownOption>
          ))}
        </OptionsWrapper>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
