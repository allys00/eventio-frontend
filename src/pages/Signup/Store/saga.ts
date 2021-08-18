import { all, call, put, takeEvery } from 'redux-saga/effects';
import { changeSignUpLoading, signupClearState } from './actions';
import { SIGNUP_ACTIONS } from './reducer';
import { pages } from '../../../utils/constants/pages';
import { history } from '../../../config/Store/store.config';

export function* createNewUser({ payload: newUser }: any) {
  try {
    yield put(changeSignUpLoading(true));
    // yield call(SignupApi.createUser, newUser);
    yield call(history.push, pages.LOGIN);
    yield put(changeSignUpLoading(false));
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
