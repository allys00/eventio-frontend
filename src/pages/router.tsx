import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { history } from '../config/Store/store.config';
import { pages } from '../utils/constants/pages';
import Dashboard from './Dashboard/Dashboard';
import { ProtectRouter, PublicRouter } from './RoutesType';
import Login from './Login/Login';
import Signup from './Signup/Signup';

export default function MainRouter(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <PublicRouter path={pages.LOGIN} component={Login}/>
        <PublicRouter path={pages.SIGNUP} component={Signup} />
        <ProtectRouter path={pages.DASHBOARD} component={Dashboard} />
        <Redirect to={pages.DASHBOARD} />
      </Switch>
    </Router>
  );
}
