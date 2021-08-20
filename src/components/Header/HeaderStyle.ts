import { styled } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  padding: 0 16px;
`;

export const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.dark_grey};
  padding: 12px;
  border-radius: 50%;
  font-weight: 600;
  width: 20px;
  height: 20px;
  font-size: 14px;
  margin-right: 8px;
`;

export const UserName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.dark_grey};
  font-size: 16px;
  margin: 0 12px 0 4px;
`;
