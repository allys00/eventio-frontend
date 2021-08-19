import { all, call, put, takeEvery } from 'redux-saga/effects';
import { changeLoginError, changeLoginLoading, changeUserLogged, loginClearState } from './actions';
import { LOGIN_ACTIONS } from './reducer';
import { pages } from '../../../utils/constants/pages';
import { history } from '../../../config/Store/store.config';
import AuthApi from '../../../services/auth/auth';
import Storage, { StorageKeys } from '../../../services/storage/Storage';

export function* doLogin({ payload: credentials }: any) {
  try {
    yield put(changeLoginLoading(true));
    const { user, accessToken, refreshToken } = yield call(
      AuthApi.login,
      credentials
    );
    yield call(Storage.save, StorageKeys.ACCESS_TOKEN, accessToken);
    yield call(Storage.save, StorageKeys.REFRESH_TOKEN, refreshToken);
    yield call(Storage.save, StorageKeys.USER_LOGGED, user);
    yield call(history.push, pages.EVENTS);
    yield put(loginClearState());
    yield put(changeUserLogged(user));
  } catch (error) {
    if(error.error === 'User.InvalidPassword'){
      yield put(changeLoginError('Oops! That email and pasword combination is not valid.'))
      return;
    }
    yield put(changeLoginError('Oops something wrong happened, try again'))
  } finally {
    yield put(changeLoginLoading(false));
  }
}

export default function* LoginSaga() {
  const doLoginSaga: unknown = yield takeEvery(
    LOGIN_ACTIONS.ASYNC_LOGIN,
    doLogin
  );
  yield all([doLoginSaga]);
}
