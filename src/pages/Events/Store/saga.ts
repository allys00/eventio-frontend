import dayjs from 'dayjs';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { IStore } from '../../../config/Store/mainReducer';
import { IEvent, IEventBase } from '../../../models/event.model';
import EventsApi from '../../../services/events/events';
import {
  changeEventEditError,
  changeEventEditModal,
  changeEventLoading,
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

export function* createEvent({ payload: event }: any) {
  try {
    yield put(changeEventLoading(true));
    const { date, time, ...rest } = event;
    const startsAt = dayjs(`${date} ${time}`, 'MM/DD/YYYY HH:mm').toISOString();
    const newEvent: IEventBase = { ...rest, startsAt };
    yield call(EventsApi.createEvent, newEvent);
    yield put(changeEventEditModal(false));
    yield call(getAllEvents);
  } catch (error) {
    if (error.errors && error.errors.startsAt) {
      if (error.errors.startsAt.kind === 'Future') {
        yield put(changeEventEditError('Date must be in the future'));
      }
    }
    console.error(error);
  } finally {
    yield put(changeEventLoading(false));
  }
}

export default function* EventsSaga() {
  yield all([
    yield takeEvery(EVENTS_ACTIONS.ASYNC_GET_ALL_EVENTS, getAllEvents),
    yield takeEvery(EVENTS_ACTIONS.ASYNC_ATTEND_AN_EVENT, attendAnEvent),
    yield takeEvery(EVENTS_ACTIONS.ASYNC_UNATTEND_AN_EVENT, unAttendAnEvent),
    yield takeEvery(EVENTS_ACTIONS.ASYNC_CREATE_EVENT, createEvent),
  ] as unknown[]);
}
