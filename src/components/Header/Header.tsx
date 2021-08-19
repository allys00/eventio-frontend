import React, { useCallback, useState } from 'react';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { theme } from '../../styles/theme';
import IconArrow from '../Icon/IconArrow';
import IconLogo from '../Icon/IconLogo';
import {
  HeaderContainer,
  UserAvatar,
  ProfileMenu,
  UserName,
  ProfileOption,
  ProfileMenuOptions,
} from './HeaderStyle';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { device } = useWindowSize();

  const showMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const hideMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <HeaderContainer>
      <IconLogo width={30} height={30} color={theme.color.primary} />

      <ProfileMenu onMouseEnter={showMenu} onMouseLeave={hideMenu}>
        <UserAvatar>TW</UserAvatar>
        {device === ENUMDevices.isDesktop && <UserName>Tom Watts</UserName>}
        <IconArrow width={16} height={16} color={theme.color.secondary} />
        {menuIsOpen && (
          <ProfileMenuOptions>
            <ProfileOption>My Profile</ProfileOption>
            <ProfileOption>Logout</ProfileOption>
          </ProfileMenuOptions>
        )}
      </ProfileMenu>
    </HeaderContainer>
  );
}

export default Header;
