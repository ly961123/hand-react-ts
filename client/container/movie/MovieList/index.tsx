import React, { useEffect, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NowPlaying } from '@rootDir/model/movie.ts';
import './index.scss';

type IProps = {
  nowPlaying: NowPlaying,
  topText: string,
} & Pick<RouteComponentProps, 'history'>;

const MovieList = ({
  history,
  nowPlaying,
  topText,
}: IProps) => {

  useEffect(() => {
    console.log(nowPlaying, 'nowPlayingData');
  }, [nowPlaying]);

  const buyTicket = (e: MouseEvent, id: string) => {
    const { currentTarget } = e;
    e.stopPropagation();
    history.push(`/movie/${id}/buyTicket`);
    console.log(currentTarget, '点了1111');
  };

  const goDetail = (id: string) => {
    console.log(id, 'id');
    history.push(`/movie/${id}/details`);
  };

  return (
    <div className='movie_list'>
      <ul className='movie_list__piece'>
        {
          nowPlaying?.list.map((v, i) =>
            <li
              className='movie_list__grain'
              key={v.name + i}
              onClick={() => {goDetail(v.id)}}
            >
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
                  onClick={(e: MouseEvent) => buyTicket(e, v.id)}
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
