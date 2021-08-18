import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import SignupReducer, { ISignUpState } from '../../pages/Signup/Store/reducer';

const RootReducer = combineReducers({
  signUp: SignupReducer,
  route: routerReducer
});

export interface IStore {
  signUp: ISignUpState;
}

export default RootReducer;
