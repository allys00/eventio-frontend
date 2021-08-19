import React from 'react';
import { Container, Content } from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import EventCard from './EventCard/EventCard';
import { EventList } from './EventList/EventListStyle';
import EventsHeader from './EventsHeader/EventsHeader';

function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <EventsHeader />
        <EventList>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <EventCard key={item} />
          ))}
        </EventList>
      </Content>
    </Container>
  );
}

export default Dashboard;
