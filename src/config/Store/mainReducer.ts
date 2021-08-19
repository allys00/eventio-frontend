import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import SignupReducer, { ISignUpState } from '../../pages/Signup/Store/reducer';
import LoginReducer, { ILoginState } from '../../pages/Login/Store/reducer';

const RootReducer = combineReducers({
  signUp: SignupReducer,
  login: LoginReducer,
  route: routerReducer
});

export interface IStore {
  signUp: ISignUpState;
  login: ILoginState
}

export default RootReducer;
