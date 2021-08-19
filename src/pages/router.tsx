import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { history } from '../config/Store/store.config';
import { pages } from '../utils/constants/pages';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import { ProtectRouter, PublicRouter } from './ProtectedRouter';
import Signup from './Signup/Signup';

export default function MainRouter(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <PublicRouter path={pages.LOGIN} component={Login}/>
        <PublicRouter path={pages.SIGNUP} compoent={Signup} />
        <ProtectRouter path={pages.DASHBOARD} component={Dashboard} />

        <Redirect to={pages.DASHBOARD} />
      </Switch>
    </Router>
  );
}
