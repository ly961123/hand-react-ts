import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import user from '../../container/user';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={user} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
