import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movie from '../../container/movie/index';
import Details from '../../container/movie/detail/index';
import BuyTicket from '../../container/movie/buyTicket/index';
import City from '../../container/movie/city';

export default ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={match.url} component={Movie} />
    <Route path={`${match.path}/:movieId/details`} component={Details} />
    <Route path={`${match.path}/:movieId/buyTicket`} component={BuyTicket} />
    <Route path={`${match.path}/:cityId/city`} component={City} />
    <Redirect from='*' to={match.url} />
  </Switch>
);
