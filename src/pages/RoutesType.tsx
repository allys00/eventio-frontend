import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Storage, { StorageKeys } from '../services/storage/Storage';
import { pages } from '../utils/constants/pages';

export const ProtectRouter = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      Storage.get(StorageKeys.ACCESS_TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect to={pages.LOGIN} />
      )
    }
  />
);

export const PublicRouter = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      !Storage.get(StorageKeys.ACCESS_TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect to={pages.EVENTS} />
      )
    }
  />
);

