import { styled } from '../../../../styles/theme';
import { OptionsWrapper } from '../../../../components/Dropdown/DropdownStyle';

export const EventsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const EventsFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventsFilterItem = styled.p<{ isActive?: boolean }>`
  text-decoration: uppercase;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  margin: 16px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary : theme.color.grey};
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ListActions = styled.div`
  display: flex;
`;

export const ActionItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const EventsFilterMobile = styled.div`
  color: ${({ theme }) => theme.color.dark_grey};
  margin: 0;
  text-decoration: uppercase;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 1px;

  ${OptionsWrapper} {
    top: 20px;
    width: 140px;
    left: 0;
    margin-left: 40px;
  }
`;

export const FilterSelected = styled.p`
  color: ${({ theme }) => theme.color.primary};
  margin: 0 8px;
  font-weight: bold;
`;
