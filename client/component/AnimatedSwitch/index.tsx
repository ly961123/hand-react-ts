import React from 'react';
// import { RouteComponentProps } from 'react-router';
// import apiClient from '@rootDir/client/apiClient';
// import { IMovieDetail, NowPlayingData } from '@rootDir/model/movie.ts';
// import { GlobalState } from '../../application/index';
// import Content from '../components/MovieContent';
// import Picture from '../components/Picture';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import './index.scss';

const AnimatedSwitch = (props: any) => {
  // const [textHeight, setTextHeight] = useState(0);
  const { children } = props;
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={props.type || 'page'}
            timeout={props.duration || 500}
            unmountOnExit={true}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default AnimatedSwitch;
