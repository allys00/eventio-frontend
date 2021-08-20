import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../config/Store/mainReducer';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { theme } from '../../styles/theme';
import Dropdown from '../Dropdown/Dropdown';
import IconLogo from '../Icon/IconLogo';
import {
  HeaderContainer,
  UserAvatar,
  ProfileMenu,
  UserName,
} from './HeaderStyle';

function Header() {
  const { firstName, lastName } = useSelector(({ login }: IStore) => ({
    firstName: login.userLogged.firstName,
    lastName: login.userLogged.lastName,
  }));
  const { device } = useWindowSize();

  return (
    <HeaderContainer>
      <IconLogo width={30} height={30} color={theme.color.primary} />

      <Dropdown
        options={[
          { label: 'My Profile', onClick: console.log },
          { label: 'Logout', onClick: console.log },
        ]}
      >
        <ProfileMenu>
          <UserAvatar>
            {firstName[0]}
            {lastName[0]}
          </UserAvatar>
          {device === ENUMDevices.isDesktop && (
            <UserName>
              {firstName} {lastName}
            </UserName>
          )}
        </ProfileMenu>
      </Dropdown>
    </HeaderContainer>
  );
}

export default Header;
