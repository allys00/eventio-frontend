import { IEvent, IEventBase } from '../../models/event.model';
import { URLS } from '../../utils/constants/urls';
import { Delete, Get, Post } from '../api/Api';

const EventsApi = {
  getAllEvents: (): Promise<IEvent[]> => {
    return Get(URLS.EVENTS).then((reponse) => reponse.json());
  },
  unAttendAnEvent: (eventId: string): Promise<IEvent> => {
    return Delete(URLS.UNATTEND_AN_EVENT(eventId)).then((response) =>
      response.json()
    );
  },
  attendAnEvent: (eventId: string): Promise<IEvent> => {
    return Post(URLS.ATTEND_AN_EVENT(eventId)).then((response) =>
      response.json()
    );
  },
  createEvent: (event: IEventBase): Promise<IEvent> => {
    return Post(URLS.EVENTS, event).then((reponse) => reponse.json());
  },
};

export default EventsApi;
