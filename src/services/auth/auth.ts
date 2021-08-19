import {
  ILoginCredentials,
  IUserLogged,
} from '../../pages/Login/Store/reducer';
import { IUserSignup } from '../../pages/Signup/Store/reducer';
import { URLS } from '../../utils/constants/urls';
import { Post } from '../api/Api';

const AuthApi = {
  createUser: (newUser: IUserSignup): Promise<any> => {
    return Post(URLS.USERS, newUser);
  },
  login: async (
    credentials: ILoginCredentials
  ): Promise<{
    accessToken: string | null;
    refreshToken: string | null;
    user: IUserLogged;
  }> => {
    const response = await Post(URLS.LOGIN, credentials);
    if (response.ok) {
      const accessToken = await response.headers.get('Authorization');
      const refreshToken = await response.headers.get('Refresh-Token');
      const user = await response.json();
      return Promise.resolve({ accessToken, refreshToken, user });
    } else {
      return Promise.reject(await response.json());
    }
  },
};

export default AuthApi;
