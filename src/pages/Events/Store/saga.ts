import { all, call, put, takeEvery } from 'redux-saga/effects';
import { IEvent } from '../../../models/event.model';
import EventsApi from '../../../services/events/events';
import { changeEvents, changeEventsLoading, changeLoadingEventAction } from './actions';
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

export function* attendAnEvent({ payload: eventId }: any) { 
  try {
    yield put(changeLoadingEventAction(eventId));
    const event: IEvent = yield call(EventsApi.attendAnEvent, eventId);
    console.log('oi')
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

    console.log('oi2')
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
