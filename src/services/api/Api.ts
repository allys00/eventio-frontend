import { ENV } from '../../enviroment/enviroment';
import Storage, { StorageKeys } from '../storage/Storage';

const baseHeaders = (othersHeaders: any) => {
  const accessToken = Storage.get(StorageKeys.ACCESS_TOKEN);
  const headers: any = {
    'Content-type': 'application/json',
    APIKey: ENV.API_KEY,
  };
  if (accessToken) {
    headers.Authorization = `${accessToken}`;
  }

  return { ...headers, ...othersHeaders };
};

export const Get = async (url: string, header?: any) => {
  const headers =  baseHeaders(header);
  return await fetch(url, {
    method: 'GET',
    headers,
  });
};

export const Delete = async (url: string, header?: any) => {
  const headers =  baseHeaders(header);
  return await fetch(url, {
    method: 'DELETE',
    headers,
  });
};

export const Post = async (url: string, data?: any, header?: any) => {
  const headers = baseHeaders(header);
  console.log(headers);

  const params: RequestInit = {
    method: 'POST',
    headers,
  }
  if(data){
    params.body = JSON.stringify(data)
  }
  
  return await fetch(url, params);
};
