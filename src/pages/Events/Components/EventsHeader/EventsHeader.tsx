import React from 'react';
import IconGrid from '../../../../components/Icon/IconGrid';
import IconList from '../../../../components/Icon/IconList';
import { Title } from '../../../../components/Title/Title';
import useWindowSize, { ENUMDevices } from '../../../../hook/windowSize';
import { theme } from '../../../../styles/theme';
import {
  ActionItem,
  EventsFilter,
  EventsFilterItem,
  EventsHeaderContainer,
  ListActions,
} from './EventsHeaderStyle';

export enum ENUMFilterType {
  ALL = 'all',
  PAST = 'past',
  FUTURE = 'future',
}

interface IProps {
  onChangeFilter: (filter: ENUMFilterType) => void;
  currentFilter: ENUMFilterType;
}

function EventsHeader({ currentFilter, onChangeFilter }: IProps) {
  const { device } = useWindowSize();

  return (
    <EventsHeaderContainer>
      {device === ENUMDevices.isDesktop ? (
        <EventsFilter>
          <EventsFilterItem
            onClick={() => onChangeFilter(ENUMFilterType.ALL)}
            isActive={currentFilter === ENUMFilterType.ALL}
          >
            ALL EVENTS
          </EventsFilterItem>
          <EventsFilterItem
            onClick={() => onChangeFilter(ENUMFilterType.FUTURE)}
            isActive={currentFilter === ENUMFilterType.FUTURE}
          >
            FUTURE EVENTS
          </EventsFilterItem>
          <EventsFilterItem
            onClick={() => onChangeFilter(ENUMFilterType.PAST)}
            isActive={currentFilter === ENUMFilterType.PAST}
          >
            PAST EVENTS
          </EventsFilterItem>
        </EventsFilter>
      ) : (
        <Title>My events</Title>
      )}
      <ListActions>
        <ActionItem>
          <IconGrid width={20} height={20} color={theme.color.primary} />
        </ActionItem>
        <ActionItem>
          <IconList width={20} height={20} color={theme.color.grey} />
        </ActionItem>
      </ListActions>
    </EventsHeaderContainer>
  );
}

export default EventsHeader;
