import { IEvent } from '../../../models/event.model';
import { ENUMFilterType } from '../Components/EventsHeader/EventsHeader';
import { EVENTS_ACTIONS } from './reducer';

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
  payload: eventId
})
export const unAttendAnEvent = (eventId: string) => ({
  type: EVENTS_ACTIONS.ASYNC_UNATTEND_AN_EVENT,
  payload: eventId
})

export const changeLoadingEventAction = (loadingEventAction: '') => ({
  type: EVENTS_ACTIONS.CHANGE_LOADING_EVENT_ACTION,
  payload: { loadingEventAction }
})