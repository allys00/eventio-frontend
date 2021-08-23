import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../config/Store/mainReducer';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { doLogout } from '../../pages/Login/Store/actions';
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
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <IconLogo width={30} height={30} color={theme.color.primary} />

      <Dropdown
        options={[
          { label: 'Logout', onClick: () => dispatch(doLogout()) },
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
