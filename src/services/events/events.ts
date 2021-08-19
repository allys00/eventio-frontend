import { IEvent } from '../../models/event.model';
import { URLS } from '../../utils/constants/urls';
import { Get } from '../api/Api';

const EventsApi = {
  getAllEvents: (): Promise<IEvent[]> => {
    return Get(URLS.ALL_EVENTS).then((reponse) => reponse.json());
  },
};

export default EventsApi;
