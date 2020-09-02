import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd-mobile';
import NavBar from '@rootDir/client/component/NavBar'
import { NowPlayingData } from '@rootDir/model/movie.ts'
import TopBar from './components/TopBar'
import MovieList from './MovieList';
import './index.scss';

const defaultData = [
  {
    name: '八佰',
    nation: '中国大陆',
    poster: 'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
    grade: '7.1',
    runtime: 165,
    filmType: {
      name: '2D',
      value: 1,
    },
    actors: [
      {
        name: '管虎',
        role: '导演',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
      },
      {
        name: '张泽',
        role: '老算盘',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
      },
      {
        name: '姜武',
        role: '老铁',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
      },
      {
        name: '王千源',
        role: '羊拐',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
      },
      {
        name: '黄志忠',
        role: '老葫芦',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
      },
    ],
  },
  {
    name: '八佰1',
    nation: '中国大陆',
    poster: 'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
    grade: '7.1',
    runtime: 165,
    filmType: {
      name: '2D',
      value: 1,
    },
    actors: [
      {
        name: '管虎',
        role: '导演',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
      },
      {
        name: '张泽',
        role: '老算盘',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
      },
      {
        name: '姜武',
        role: '老铁',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
      },
      {
        name: '王千源',
        role: '羊拐',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
      },
      {
        name: '黄志忠',
        role: '老葫芦',
        avatarAddress: 'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
      },
    ],
  },
];

const Movie = () => {
  const history = useHistory();
  const [text, setText] = useState('');
  const [nowPlayingData, setNowPlayingData] = useState<NowPlayingData[]>(defaultData);
  useEffect(() => {
    setText('首页');
    setNowPlayingData(defaultData);
  }, []);

  const goDetails = (id: number) => {
    history.push(`/movie/${id}/details`)
  };

  return (
    <div className='movie'>
      <div className='movie__top'>
        <TopBar/>
        <MovieList nowPlayingData={nowPlayingData}/>
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
