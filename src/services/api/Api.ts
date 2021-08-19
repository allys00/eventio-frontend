import { ENV } from '../../enviroment/enviroment';
import Storage, { StorageKeys } from '../storage/Storage';

const baseHeaders = (othersHeaders: any) => {
  const userLogged = Storage.get(StorageKeys.USER_LOGGED);
  const { accessToken } = JSON.parse(userLogged || '{}');
  const headers: any = {
    'Content-type': 'application/json',
    APIKey: ENV.API_KEY,
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return { ...headers, ...othersHeaders };
};

export const Get = async (url: string, header: any) => {
  const headers =  baseHeaders(header);
  return await fetch(url, {
    method: 'GET',
    headers,
  });
};

export const Post = async (url: string, data: any, header?: any) => {
  const headers = baseHeaders(header);
  return await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers,
  });
};
