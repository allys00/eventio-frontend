import dayjs from 'dayjs';

import { validateEmail } from '../../utils/functions';

export const inputsValidations = {
  email: (value: string) => {
    const isValid = validateEmail(value);
    return isValid ? '' : 'Invalid Email';
  },
  date: (value: string) => {
    return dayjs(value).isValid() ? '' : 'Invalid Date';
  },
  time: (value: string) => {
    const [hour, minute] = value.split(':');
    return Number(hour) <= 23 && Number(minute) <= 59 ? '' : 'Invalid Time';
  },
};
