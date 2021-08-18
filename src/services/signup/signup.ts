import { IUserSignup } from '../../pages/Signup/Store/reducer';
import { URLS } from '../../utils/constants/urls';
import { Post } from '../api/Api';

const SignupApi = {
  createUser: (newUser: IUserSignup): Promise<any> => {
    return Post(URLS.USERS, {
      ...newUser,
    });
  },
};

export default SignupApi;
