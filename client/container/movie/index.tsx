import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd-mobile';
import NavBar from '@rootDir/client/component/NavBar'
import { NowPlaying, TopBars, IMovieList } from '@rootDir/model/movie.ts'
import apiClient from '@rootDir/client/apiClient'
import { GlobalState } from '../application/index';
import TopBar from './components/TopBar'
import MovieList from './MovieList';
import './index.scss';

const tabs: TopBars[] = [
  { title: '正在热映', key: 'now' },
  { title: '即将上映', key: 'about' },
];

const defultData = {
  count: 0,
  list: [],
};

const Movie = ({
  location,
  history,
}: Pick<RouteComponentProps, 'history' | 'location'>) => {
  const [text] = useState('首页');
  const [topText, setTopText] = useState('now');
  const [nowPlayingData, setNowPlayingData] = useState<NowPlaying>(defultData);
  const { showToast, setShowToast } = useContext(GlobalState);

  const fetchList = async () => {
    const result: IMovieList = await apiClient.get(`movie`);
    return result;
  };

  const getList = () => {
    setShowToast(true);
    fetchList().then((res: IMovieList) => {
      console.log(res, 'resresres');
      setNowPlayingData(res.data);
      setShowToast(false);
    }).catch((err) => {
      console.log(err, '出错了');
    })
  };

  useEffect(() => {
    console.log(showToast, 'showToast');
    console.log(setShowToast, 'setShowToast');
    console.log(location, 'location');
    console.log(history, 'history');
    getList();
  }, []);

  const goDetails = (id: number) => {
    history.push(`/movie/${id}/details`);
  };

  return (
    <div className='movie'>
      <div className='movie__top'>
        <TopBar
          tabs={tabs}
          topText={topText}
          setTopText={setTopText}
          setList={getList}
        />
        <MovieList
          nowPlaying={nowPlayingData}
          topText={topText}
          history={history}
        />
        {text}
        <Button
          onClick={() => goDetails(1111)}
          size='small'
          inline
        >
          去详情
        </Button>
      </div>
      <NavBar/>
    </div>
  );
}

export default Movie;
