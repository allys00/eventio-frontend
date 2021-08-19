import { all, call, put, takeEvery } from 'redux-saga/effects';
import { IEvent } from '../../../models/event.model';
import EventsApi from '../../../services/events/events';
import { changeEvents, changeEventsLoading } from './actions';
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

export default function* LoginSaga() {
  const getAllEventsSaga: unknown = yield takeEvery(
    EVENTS_ACTIONS.ASYNC_GET_ALL_EVENTS,
    getAllEvents
  );
  yield all([getAllEventsSaga]);
}
