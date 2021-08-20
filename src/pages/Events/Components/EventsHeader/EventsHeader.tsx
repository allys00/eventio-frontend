import React, { useMemo } from 'react';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import IconGrid from '../../../../components/Icon/IconGrid';
import IconList from '../../../../components/Icon/IconList';
import useWindowSize, { ENUMDevices } from '../../../../hook/windowSize';
import { theme } from '../../../../styles/theme';
import {
  ActionItem,
  EventsFilter,
  EventsFilterItem,
  EventsFilterMobile,
  EventsHeaderContainer,
  FilterSelected,
  ListActions,
} from './EventsHeaderStyle';

export enum ENUMFilterType {
  ALL = 'ALL EVENTS',
  PAST = 'PAST EVENTS',
  FUTURE = 'FUTURE EVENTS',
}
interface IProps {
  onChangeFilter: (filter: ENUMFilterType) => void;
  onChangeInlineMode: (isInline: boolean) => void;
  currentFilter: ENUMFilterType;
  inlineMode: boolean;
}

function EventsHeader({
  currentFilter,
  onChangeFilter,
  inlineMode,
  onChangeInlineMode,
}: IProps) {
  const { device } = useWindowSize();

  const filterOptions = useMemo(() => {
    return [
      {
        label: ENUMFilterType.ALL,
        onClick: () => onChangeFilter(ENUMFilterType.ALL),
        isActive: currentFilter === ENUMFilterType.ALL,
      },
      {
        label: ENUMFilterType.FUTURE,
        onClick: () => onChangeFilter(ENUMFilterType.FUTURE),
        isActive: currentFilter === ENUMFilterType.FUTURE,
      },
      {
        label: ENUMFilterType.PAST,
        onClick: () => onChangeFilter(ENUMFilterType.PAST),
        isActive: currentFilter === ENUMFilterType.PAST,
      },
    ];
  }, [currentFilter]);

  return (
    <EventsHeaderContainer>
      {device === ENUMDevices.isDesktop ? (
        <EventsFilter>
          {filterOptions.map(({ onClick, label, isActive }) => (
            <EventsFilterItem key={label} onClick={onClick} isActive={isActive}>
              {label}
            </EventsFilterItem>
          ))}
        </EventsFilter>
      ) : (
        <EventsFilterMobile>
          <Dropdown options={filterOptions} iconColor={theme.color.primary}>
            SHOW: <FilterSelected>{currentFilter}</FilterSelected>
          </Dropdown>
        </EventsFilterMobile>
      )}
      {device === ENUMDevices.isDesktop && (
        <ListActions>
          <ActionItem onClick={() => onChangeInlineMode(false)}>
            <IconGrid
              width={20}
              height={20}
              color={!inlineMode ? theme.color.primary : theme.color.ligth_grey}
            />
          </ActionItem>
          <ActionItem onClick={() => onChangeInlineMode(true)}>
            <IconList
              width={20}
              height={20}
              color={inlineMode ? theme.color.primary : theme.color.ligth_grey}
            />
          </ActionItem>
        </ListActions>
      )}
    </EventsHeaderContainer>
  );
}

export default EventsHeader;
