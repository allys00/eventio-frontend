import { styled } from '../../styles/theme';

export const OptionsWrapper = styled.ul`
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

export const DropdownOption = styled.li`
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

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
