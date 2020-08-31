import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import order from '../../container/order';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={order} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
