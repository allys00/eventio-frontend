import { call } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { doLogout } from '../../pages/Login/Store/saga';
import Storage from '../../services/storage/Storage';
import { history } from '../../config/Store/store.config';
import { pages } from '../../utils/constants/pages';

describe('Testing Login Saga', () => {
  describe('doLogout generator', () => {
    const it = sagaHelper(doLogout());

    it('should clear the storage', (result) => {
      expect(result).toEqual(call(Storage.clear));
      return null;
    });

    it('should go to Login', (result) => {
      expect(result).toEqual(call(history.push, pages.LOGIN));
      return null;
    });
    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    });
    return;
  });
});
