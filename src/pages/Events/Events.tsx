import React, { useEffect, useMemo } from 'react';
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
  const { events, userId, loading, filterType } = useSelector(
    ({ events, login }: IStore) => ({
      userId: login.userLogged.id,
      events: events.events,
      loading: events.loading,
      filterType: events.filterType,
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

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
  console.log(filterType);
  if (loading) return <h2>Loading...</h2>;
  return (
    <Container>
      <Header />
      <Content>
        <EventsHeader
          onChangeFilter={handlerChangeFilter}
          currentFilter={filterType}
        />
        <EventList>
          {eventsToShow.map((event) => (
            <EventCard
              key={event.id}
              startsAt={event.startsAt}
              title={event.title}
              ownerName={event.owner.firstName}
              description={event.description}
              capacity={event.capacity}
              attendeesQtd={event.attendees.length}
              userIsOwner={event.isMine}
              userIsAttendee={event.imAttendee}
            />
          ))}
        </EventList>
      </Content>
    </Container>
  );
}

export default Events;
