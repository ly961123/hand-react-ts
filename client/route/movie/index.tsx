import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import movie from '../../container/movie/index/index';
import details from '../../container/home/detail/index';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={movie} />
    <Route path={`${match.path}/:requireId/details`} component={details} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
