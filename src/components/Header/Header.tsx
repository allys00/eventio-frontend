import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../config/Store/mainReducer';
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
  const { firstName, lastName } = useSelector(({ login }: IStore) => ({
    firstName: login.userLogged.firstName,
    lastName: login.userLogged.lastName,
  }));
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
        <UserAvatar>
          {firstName[0]}
          {lastName[0]}
        </UserAvatar>
        {device === ENUMDevices.isDesktop && (
          <UserName>
            {firstName} {lastName}
          </UserName>
        )}
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
