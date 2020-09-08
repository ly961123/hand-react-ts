import React, { useEffect } from 'react';
import { NowPlaying } from '@rootDir/model/movie.ts'
import apiClient from '@rootDir/client/apiClient'
import './index.scss';

interface IProps {
  nowPlaying: NowPlaying,
  topText: string,
}

const MovieList = ({
  nowPlaying,
  topText,
}: IProps) => {

  useEffect(() => {
    console.log(nowPlaying, 'nowPlayingData');
  }, [nowPlaying]);

  const fetchList = async () => {
    console.log('进来啦');
    const result = await apiClient.get(`movie`);
    return result;
  };

  const getList = () => {
    console.log('点了1111');
    fetchList().then((res) => {
      console.log(res, 'resresres');
    }).catch(_ => {
      console.log('出错了');
    })
  };

  return (
    <div className='movie_list'>
      <ul className='movie_list__piece'>
        {
          nowPlaying?.list.map((v, i) =>
            <li className='movie_list__grain' key={v.name + i}>
              <div className='movie_list__left'>
                <img src={v.poster} alt={v.name}/>
              </div>
              <div className='movie_list__center'>
                <div className='movie_list__top'>
                  <span className='name'>{v.name}</span>
                  <span className='filmTypeName'>{v.filmType.name}</span>
                </div>
                <div className='movie_list__critic'>
                  <span>观众评分</span>
                  <span className='grade'>{v.grade}</span>
                </div>
                <div className='movie_list__protagonist'>
                  主演：{v.actors.map((item: any) => item.name + ' ')}
                </div>
                <div className='movie_list__nation'>
                  {`${v.nation} | ${v.runtime}分钟`}
                </div>
              </div>
              <div className='movie_list__right'>
                <span
                  className='movie_list__ticket'
                  onClick={() => {getList()}}
                >{topText === 'now' ? '购票' : '预约'}</span>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default MovieList;
