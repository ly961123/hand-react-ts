import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import memberCenter from '../../container/memberCenter';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={memberCenter} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
