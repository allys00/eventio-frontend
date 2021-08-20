import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { IStore } from '../../../config/Store/mainReducer';
import { IEvent } from '../../../models/event.model';
import EventsApi from '../../../services/events/events';
import {
  changeEvents,
  changeEventsLoading,
  changeLoadingEventAction,
} from './actions';
import { EVENTS_ACTIONS } from './reducer';

export function* getAllEvents() {
  try {
    yield put(changeEventsLoading(true));
    const events: IEvent[] = yield call(EventsApi.getAllEvents);
    yield put(changeEvents(events));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(changeEventsLoading(false));
  }
}

export function* replaceEvent(event: IEvent) {
  const events: IEvent[] = yield select(({ events }: IStore) => events.events);
  const index = events.findIndex(({ id }) => id === event.id);
  events[index] = event;
  return [...events];
}

export function* attendAnEvent({ payload: eventId }: any) {
  try {
    yield put(changeLoadingEventAction(eventId));
    const event: IEvent = yield call(EventsApi.attendAnEvent, eventId);
    const newEvents: IEvent[] = yield call(replaceEvent, event);
    yield put(changeEvents(newEvents));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(changeLoadingEventAction(''));
  }
}

export function* unAttendAnEvent({ payload: eventId }: any) {
  try {
    yield put(changeLoadingEventAction(eventId));
    const event: IEvent = yield call(EventsApi.unAttendAnEvent, eventId);
    const newEvents: IEvent[] = yield call(replaceEvent, event);
    yield put(changeEvents(newEvents));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(changeLoadingEventAction(''));
  }
}

export default function* LoginSaga() {
  const getAllEventsSaga: unknown = yield takeEvery(
    EVENTS_ACTIONS.ASYNC_GET_ALL_EVENTS,
    getAllEvents
  );
  const attendAnEventSaga: unknown = yield takeEvery(
    EVENTS_ACTIONS.ASYNC_ATTEND_AN_EVENT,
    attendAnEvent
  );
  const unAttendAnEventSaga: unknown = yield takeEvery(
    EVENTS_ACTIONS.ASYNC_UNATTEND_AN_EVENT,
    unAttendAnEvent
  );
  yield all([getAllEventsSaga, attendAnEventSaga, unAttendAnEventSaga]);
}
