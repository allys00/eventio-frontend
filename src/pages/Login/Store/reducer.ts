import { IAction } from '../../../models/action.model';

export enum LOGIN_ACTIONS {
  ASYNC_LOGIN = '@LOGIN_ASYNC_LOGIN',
  CHANGE_LOADING = '@LOGIN_CHANGE_LOADING',
  CHANGE_USER_LOGGED = '@LOGIN_CHANGE_USER_LOGGED',
  CHANGE_CREDENTIALS = '@LOGIN_CHANGE_CREDENTIALS',
  CHANGE_LOGIN_ERROR = '@LOGIN_CHANGE_LOGIN_ERROR',
  CLEAR_STATE = '@LOGIN_CLEAR_STATE',
}

const INITIAL_STATE = {
  loading: false,
  loginError: '',
  credentials: {
    email: '',
    password: '',
  },
  userLogged: {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
  },
};

export type ILoginState = typeof INITIAL_STATE;
export type IUserLogged = typeof INITIAL_STATE.userLogged;
export type ILoginCredentials = typeof INITIAL_STATE.credentials;

export default (
  state = INITIAL_STATE,
  action: IAction<LOGIN_ACTIONS, ILoginState>
): ILoginState => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_ACTIONS.CHANGE_LOADING:
      return { ...state, loading: payload.loading };

    case LOGIN_ACTIONS.CHANGE_LOGIN_ERROR:
      return { ...state, loginError: payload.loginError };

    case LOGIN_ACTIONS.CHANGE_USER_LOGGED:
      return {
        ...state,
        userLogged: payload.userLogged,
      };

    case LOGIN_ACTIONS.CHANGE_CREDENTIALS:
      return {
        ...state,
        credentials: { ...state.credentials, ...payload.credentials },
      };

    case LOGIN_ACTIONS.CLEAR_STATE:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
