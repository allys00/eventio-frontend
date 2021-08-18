import { validateEmail } from '../../utils/functions';

export const inputsValidations = {
  email: (value: string) => {
    const isValid = validateEmail(value);
    return isValid ? '' : 'Email is invalid';
  },
};
