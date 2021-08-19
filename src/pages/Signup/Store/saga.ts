import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import { changeSignUpLoading, signupClearState } from './actions';
import { SIGNUP_ACTIONS } from './reducer';
import { pages } from '../../../utils/constants/pages';
import { history } from '../../../config/Store/store.config';
import AuthApi from '../../../services/auth/auth';

export function* createNewUser({ payload: newUser }: any) {
  try {
    yield put(changeSignUpLoading(true));
    yield delay(2000)
    yield call(AuthApi.createUser, newUser);
    yield call(history.push, pages.LOGIN);
    yield put(signupClearState());
  } catch (error) {
    console.error(error);
  } finally {
    yield put(changeSignUpLoading(false));
  }
}

export default function* SignUpSaga() {
  const createNewUserSaga: unknown = yield takeEvery(
    SIGNUP_ACTIONS.ASYNC_CREATE_USER,
    createNewUser
  );
  yield all([createNewUserSaga]);
}
