import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  changeLoginError,
  changeLoginLoading,
  changeUserLogged,
  loginClearState,
} from './actions';
import { IUserLogged, LOGIN_ACTIONS } from './reducer';
import { pages } from '../../../utils/constants/pages';
import { history } from '../../../config/Store/store.config';
import AuthApi from '../../../services/auth/auth';
import Storage  from '../../../services/storage/Storage';

export function* doLogin({ payload: credentials }: any) {
  try {
    yield put(changeLoginLoading(true));
    const user: IUserLogged = yield call(AuthApi.login, credentials);
    yield call(history.push, pages.EVENTS);
    yield put(loginClearState());
    yield put(changeUserLogged(user));
  } catch (error) {
    if (error.error === 'User.InvalidPassword') {
      yield put(
        changeLoginError(
          'Oops! That email and pasword combination is not valid.'
        )
      );
      return;
    }
    yield put(changeLoginError('Oops something wrong happened, try again'));
  } finally {
    yield put(changeLoginLoading(false));
  }
}

function* doLogout() {
  try {
    yield call(Storage.clear);
    yield call(history.push, pages.LOGIN);
  } catch (error) {
    console.error(error);
  }
}
export default function* LoginSaga() {
  const doLoginSaga: unknown = yield takeEvery(
    LOGIN_ACTIONS.ASYNC_LOGIN,
    doLogin
  );

  const doLogoutSaga: unknown = yield takeEvery(
    LOGIN_ACTIONS.ASYNC_LOGOUT,
    doLogout
  );

  yield all([doLoginSaga, doLogoutSaga]);
}
