import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';

export default function MainRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
