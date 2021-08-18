import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../config/Store/store.config';
import { pages } from '../utils/constants/pages';
import Login from './Login/Login';
import Signup from './Signup/Signup';

export default function MainRouter(): JSX.Element {
  return (
      <Router history={history}>
        <Switch>
          <Route path={pages.LOGIN}>
            <Login />
          </Route>
          <Route path={pages.SIGNUP}>
            <Signup />
          </Route>
        </Switch>
      </Router>
  );
}
