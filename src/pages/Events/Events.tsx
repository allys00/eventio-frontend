import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { IStore } from '../../config/Store/mainReducer';
import EventCard from './Components/EventCard/EventCard';
import { EventList } from './Components/EventList/EventListStyle';
import EventsHeader, {
  ENUMFilterType,
} from './Components/EventsHeader/EventsHeader';
import { changeEventsFilter, getAllEvents } from './Store/actions';
import dayjs from 'dayjs';
function Events() {
  const { events, userId, loading, filterType, eventIdIsLoading } = useSelector(
    ({ events, login }: IStore) => ({
      userId: login.userLogged.id,
      events: events.events,
      loading: events.loading,
      eventIdIsLoading: events.eventIdIsLoading,
      filterType: events.filterType,
    })
  );

  const [inlineMode, setInlineMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  function changeInlineMode(value: boolean) {
    setInlineMode(value);
  }

  const eventsCalculated = useMemo(() => {
    return events.map((event) => ({
      ...event,
      isPast: dayjs().isAfter(event.startsAt),
      isMine: event.owner.id === userId,
      imAttendee: event.attendees.findIndex(({ id }) => id === userId) !== -1,
    }));
  }, [events]);

  const eventsToShow = useMemo(() => {
    if (filterType === ENUMFilterType.ALL) return eventsCalculated;
    return eventsCalculated.filter((event) => {
      return filterType === ENUMFilterType.PAST ? event.isPast : !event.isPast;
    });
  }, [eventsCalculated, filterType]);

  function handlerChangeFilter(filter: ENUMFilterType) {
    dispatch(changeEventsFilter(filter));
  }
  return (
    <Container>
      <Header />
      <Content>
        <EventsHeader
          onChangeFilter={handlerChangeFilter}
          currentFilter={filterType}
          inlineMode={inlineMode}
          onChangeInlineMode={changeInlineMode}
        />
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <EventList>
            {eventsToShow.map((event) => (
              <EventCard
                id={event.id}
                key={event.id}
                startsAt={event.startsAt}
                title={event.title}
                ownerName={`${event.owner.firstName} ${event.owner.lastName}`}
                description={event.description}
                capacity={event.capacity}
                attendeesQtd={event.attendees.length}
                userIsOwner={event.isMine}
                userIsAttendee={event.imAttendee}
                eventIdIsLoading={eventIdIsLoading}
                inlineMode={inlineMode}
              />
            ))}
          </EventList>
        )}
      </Content>
    </Container>
  );
}

export default Events;
