import { styled } from '../../../../styles/theme';

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
`

export const ActionItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
