import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import SignupReducer, { ISignUpState } from '../../pages/Signup/Store/reducer';
import LoginReducer, { ILoginState } from '../../pages/Login/Store/reducer';
import EventsReducer, { IEventState } from '../../pages/Events/Store/reducer';

const RootReducer = combineReducers({
  signUp: SignupReducer,
  login: LoginReducer,
  events: EventsReducer,
  route: routerReducer
});

export interface IStore {
  signUp: ISignUpState;
  login: ILoginState;
  events: IEventState
}

export default RootReducer;
