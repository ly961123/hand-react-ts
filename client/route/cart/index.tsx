import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import cart from '../../container/cart';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={cart} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
