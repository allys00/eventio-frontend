import { IAction } from '../../../models/action.model';

export enum SIGNUP_ACTIONS {
  ASYNC_CREATE_USER = '@SIGNUP_ASYNC_CREATE_USER',
  CHANGE_LOADING = '@SIGNUP_CHANGE_LOADING',
  CHANGE_USER = '@SIGNUP_CHANGE_USER',
  CLEAR_STATE = '@SIGNUP_CLEAR_STATE',
}

const INITIAL_STATE = {
  loading: false,
  newUser: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

export type ISignUpState = typeof INITIAL_STATE;
export type IUserSignup = typeof INITIAL_STATE.newUser;

export default (
  state = INITIAL_STATE,
  action: IAction<SIGNUP_ACTIONS, ISignUpState>
): ISignUpState => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_ACTIONS.CHANGE_LOADING:
      return { ...state, loading: payload as boolean };

    case SIGNUP_ACTIONS.CHANGE_USER:
      return {
        ...state,
        newUser: { ...state.newUser, ...payload },
      };

    case SIGNUP_ACTIONS.CLEAR_STATE:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
