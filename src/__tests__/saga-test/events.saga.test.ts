import { call, CallEffect, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { getAllEvents } from '../../pages/Events/Store/saga';
import {
  changeEvents,
  changeEventsLoading,
} from '../../pages/Events/Store/actions';
import EventsApi from '../../services/events/events';

describe('Testing Events Saga', () => {
  describe('GetAllEvents', () => {
    const it = sagaHelper(
      getAllEvents() as Generator<CallEffect<void>, void, unknown>
    );

    it('should change loading', (result) => {
      expect(result).toEqual(put(changeEventsLoading(true)));
      return null;
    });
    it('should get events from api', (result) => {
      expect(result).toEqual(call(EventsApi.getAllEvents));
      return [];
    });

    it('should change events store', (result) => {
      expect(result).toEqual(put(changeEvents([])));
      return [];
    });

    it('should change loading', (result) => {
      expect(result).toEqual(put(changeEventsLoading(false)));
      return null;
    });
    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    });
    return;
  });
});

