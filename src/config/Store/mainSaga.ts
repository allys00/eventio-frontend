import { all } from 'redux-saga/effects';
import SignUpSaga from '../../pages/Signup/Store/saga';
import LoginSaga from '../../pages/Login/Store/saga';



export default function* RootSaga(): any {
  yield all([
    SignUpSaga(),
    LoginSaga()
  ]);
}