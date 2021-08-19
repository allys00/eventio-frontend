import { ILoginCredentials, IUserLogged, LOGIN_ACTIONS } from './reducer';

export const changeLoginLoading = (loading: boolean) => ({
  type: LOGIN_ACTIONS.CHANGE_LOADING,
  payload: { loading },
});

export const changeCredentials = (credentials: Partial<Credential>) => ({
  type: LOGIN_ACTIONS.CHANGE_CREDENTIALS,
  payload: { credentials },
});

export const changeUserLogged = (userLogged: Partial<IUserLogged>) => ({
  type: LOGIN_ACTIONS.CHANGE_USER_LOGGED,
  payload: { userLogged },
});

export const doLogin = (credentials: ILoginCredentials) => ({
  type: LOGIN_ACTIONS.ASYNC_LOGIN,
  payload: credentials,
});

export const changeLoginError = (loginError: string) => ({
  type: LOGIN_ACTIONS.CHANGE_LOGIN_ERROR,
  payload: { loginError },
});

export const loginClearState = () => ({
  type: LOGIN_ACTIONS.CLEAR_STATE,
});
