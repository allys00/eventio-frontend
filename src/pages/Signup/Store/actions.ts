import { IUserSignup, SIGNUP_ACTIONS } from './reducer';

export const changeSignUpLoading = (loading: boolean) => ({
  type: SIGNUP_ACTIONS.CHANGE_LOADING,
  payload: loading,
});

export const createNewUser = (newUser: IUserSignup) => ({
  type: SIGNUP_ACTIONS.ASYNC_CREATE_USER,
  payload: newUser,
});

export const changeNewUser = (newUser: Partial<IUserSignup>) => ({
  type: SIGNUP_ACTIONS.CHANGE_USER,
  payload: newUser,
});

export const signupClearState = () => ({
  type: SIGNUP_ACTIONS.CLEAR_STATE,
});
