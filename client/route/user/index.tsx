import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import User from '../../container/user';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={User} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
