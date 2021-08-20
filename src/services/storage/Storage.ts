export const StorageKeys = {
  USER_LOGGED: '@user_logged',
  ACCESS_TOKEN: '@access_token',
  REFRESH_TOKEN: '@refresh_token',
};

const Storage = {
  save: (key: string, value: any) => {
    try {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(`Error to save the value ${key}:${value} `);
    }
  },
  get: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error(`error to get the value from ${key}`);
    }
  },
  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(`Error to remove ${key} from storage`);
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.log(`Error to clear storage`);
    }
  }
};

export default Storage;
