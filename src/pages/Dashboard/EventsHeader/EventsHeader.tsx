import React from 'react';
import IconGrid from '../../../components/Icon/IconGrid';
import IconList from '../../../components/Icon/IconList';
import { Title } from '../../../components/Title/Title';
import useWindowSize, { ENUMDevices } from '../../../hook/windowSize';
import { theme } from '../../../styles/theme';
import {
  ActionItem,
  EventsFilter,
  EventsFilterItem,
  EventsHeaderContainer,
  ListActions,
} from './EventsHeaderStyle';

function EventsHeader() {
  const { device } = useWindowSize();

  return (
    <EventsHeaderContainer>
      {device === ENUMDevices.isDesktop ? (
        <EventsFilter>
          <EventsFilterItem isActive={true}>ALL EVENTS</EventsFilterItem>
          <EventsFilterItem>FUTURE EVENTS</EventsFilterItem>
          <EventsFilterItem>PAST EVENTS</EventsFilterItem>
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
