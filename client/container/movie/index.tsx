import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd-mobile';
import NavBar from '@rootDir/client/component/NavBar'
import { NowPlaying, TopBars } from '@rootDir/model/movie.ts'
import { GlobalState } from '../application/index';
import TopBar from './components/TopBar'
import MovieList from './MovieList';
import { movieList } from './mock/movie.mock'
import './index.scss';

const tabs: TopBars[] = [
  { title: '正在热映', key: 'now' },
  { title: '即将上映', key: 'about' },
];

const defultData = {
  count: 0,
  list: [],
};

const Movie = () => {
  const history = useHistory();
  const [text, setText] = useState('');
  const [topText, setTopText] = useState('now');
  const [nowPlayingData, setNowPlayingData] = useState<NowPlaying>(defultData);
  const { showToast, setShowToast } = useContext(GlobalState);

  const setList = () => {
    setShowToast(true);
    setTimeout(() => {
      setNowPlayingData(movieList());
      setShowToast(false);
    }, 2000);
  };

  useEffect(() => {
    console.log(showToast, 'showToast');
    console.log(setShowToast, 'setShowToast');
    movieList();
    setText('首页');
    setList();
  }, []);

  const goDetails = (id: number) => {
    history.push(`/movie/${id}/details`)
  };

  return (
    <div className='movie'>
      <div className='movie__top'>
        <TopBar
          tabs={tabs}
          topText={topText}
          setTopText={setTopText}
          setList={setList}
        />
        <MovieList
          nowPlaying={nowPlayingData}
          topText={topText}
        />
        {text}
        <Button
          onClick={() => goDetails(1111)}
          size='small'
          inline
        >
          去详情111
        </Button>
      </div>
      <NavBar/>
    </div>
  );
}

export default Movie;
