import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import MemberCenter from '../../container/memberCenter';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={MemberCenter} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
