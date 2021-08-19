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
export const ProfileMenuOptions = styled.ul`
  position: absolute;
  top: 42px;
  width: 100px;
  right: 0;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box_shadow};
  margin: 0;
  padding: 8px;
  border-radius: 4px;
  list-style: none;
`;
export const ProfileOption = styled.li`
  padding: 8px;
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid #dae1e7;
  &:last-child {
    border: none;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
