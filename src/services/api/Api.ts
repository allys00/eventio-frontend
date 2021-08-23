import Store from '../../config/Store/store.config';
import { ENV } from '../../enviroment/enviroment';
import { doLogout } from '../../pages/Login/Store/actions';
import AuthApi from '../auth/auth';
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

async function refreshToken() {
  const refreshToken = Storage.get(StorageKeys.REFRESH_TOKEN);
  if (refreshToken) {
    await AuthApi.login({ refreshToken });
  }
}

async function handleError(
  response: Response,
  originalFetch: Promise<Response>
) {
  if (!response.ok) {
    const clone = response.clone();
    const error = await clone.json();
    if (error.error === 'User.NotAuthenticated') {
      await refreshToken();
      return await originalFetch;
    }
    if (error.error === 'Auth.InvalidToken') {
      Store.dispatch(doLogout());
    }
    return Promise.reject(error);
  }
  return response;
}

export const Get = async (url: string, header?: any): Promise<Response> => {
  const headers = baseHeaders(header);
  const originalFetch = fetch(url, {
    method: 'GET',
    headers,
  });

  return await originalFetch.then((response) =>
    handleError(response, originalFetch)
  );
};

export const Delete = async (url: string, header?: any) => {
  const headers = baseHeaders(header);
  const originalFetch = fetch(url, {
    method: 'DELETE',
    headers,
  });

  return await originalFetch.then((response) =>
    handleError(response, originalFetch)
  );
};

export const Post = async (url: string, data?: any, header?: any) => {
  const headers = baseHeaders(header);
  const params: RequestInit = {
    method: 'POST',
    headers,
  };
  if (data) params.body = JSON.stringify(data);
  const originalFetch = fetch(url, params);

  return await originalFetch.then((response) =>
    handleError(response, originalFetch)
  );
};
