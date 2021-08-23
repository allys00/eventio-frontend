import React, { useEffect, useState } from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { history } from '../config/Store/store.config';
import { pages } from '../utils/constants/pages';
import { ProtectRouter, PublicRouter } from './RoutesType';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Events from './Events/Events';
import Storage, { StorageKeys } from '../services/storage/Storage';
import { useDispatch } from 'react-redux';
import { changeUserLogged } from './Login/Store/actions';
import EditEvent from './Events/EditEvent/EditEvent';
import ErrorPage from './Error/Error';
import errorsPage from '../utils/constants/errorsPage';

export default function MainRouter(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogged = Storage.get(StorageKeys.USER_LOGGED);
    if (userLogged) {
      dispatch(changeUserLogged(JSON.parse(userLogged)));
    }
    setLoading(false);
  }, []);

  if (loading) return <h2>loading...</h2>;
  return (
    <Router history={history}>
      <Switch>
        <Redirect path="/" to={pages.EVENTS} exact />
        <PublicRouter path={pages.LOGIN} component={Login} />
        <PublicRouter path={pages.SIGNUP} component={Signup} />
        <ProtectRouter path={pages.EVENTS} component={Events} />
        <ProtectRouter path={pages.NEW_EVENT} component={EditEvent} />
        <Route
          path={pages.NOT_FOUND}
          component={() => <ErrorPage {...errorsPage.notFound} />}
        />
        <Redirect to={pages.NOT_FOUND} />
      </Switch>
    </Router>
  );
}
