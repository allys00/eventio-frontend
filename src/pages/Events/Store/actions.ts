import { IEvent } from '../../../models/event.model';
import { ENUMFilterType } from '../Components/EventsHeader/EventsHeader';
import { EVENTS_ACTIONS, IEditEvent } from './reducer';

export const changeEventsLoading = (loading: boolean) => ({
  type: EVENTS_ACTIONS.CHANGE_LOADING,
  payload: { loading },
});

export const getAllEvents = () => ({
  type: EVENTS_ACTIONS.ASYNC_GET_ALL_EVENTS,
});

export const changeEvents = (events: IEvent[]) => ({
  type: EVENTS_ACTIONS.CHANGE_EVENTS,
  payload: { events },
});

export const changeEventsFilter = (filterType: ENUMFilterType) => ({
  type: EVENTS_ACTIONS.CHANGE_EVENT_FILTER,
  payload: { filterType },
});

export const attendAnEvent = (eventId: string) => ({
  type: EVENTS_ACTIONS.ASYNC_ATTEND_AN_EVENT,
  payload: eventId,
});
export const unAttendAnEvent = (eventId: string) => ({
  type: EVENTS_ACTIONS.ASYNC_UNATTEND_AN_EVENT,
  payload: eventId,
});

export const changeLoadingEventAction = (eventIdIsLoading: '') => ({
  type: EVENTS_ACTIONS.CHANGE_LOADING_EVENT_ACTION,
  payload: { eventIdIsLoading },
});

export const changeEventLoading = (eventEditLoading: boolean) => ({
  type: EVENTS_ACTIONS.CHANGE_LOADING_EDIT_EVENT,
  payload: { eventEditLoading },
});

export const changeEvent = (eventEdit: Partial<IEditEvent>) => ({
  type: EVENTS_ACTIONS.CHANGE_EVENT,
  payload: { eventEdit },
});

export const changeEventEditModal = (eventEditModal: boolean) => ({
  type: EVENTS_ACTIONS.CHANGE_EVENT_EDIT_MODAL,
  payload: { eventEditModal },
});

export const createEvent = (event: IEditEvent) => ({
  type: EVENTS_ACTIONS.ASYNC_CREATE_EVENT,
  payload: event,
});
