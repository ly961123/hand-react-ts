import React, { useEffect } from 'react';
import { NowPlayingData } from '@rootDir/model/movie.ts'
import './index.scss';

interface IProps {
  nowPlayingData: NowPlayingData[],
}

const MovieList = ({
  nowPlayingData
}: IProps) => {

  useEffect(() => {
    console.log(nowPlayingData, 'nowPlayingData');
  }, []);

  return (
    <div className='movie_list'>
      <ul className='movie_list__piece'>
        {
          nowPlayingData.map((v, i) =>
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
                  主演：{v.actors.map(item => item.name + ' ')}
                </div>
                <div className='movie_list__nation'>
                  {`${v.nation} | ${v.runtime}分钟`}
                </div>
              </div>
              <div className='movie_list__right'>
                <span className='movie_list__ticket'>购票</span>
              </div>
            </li>
          )
        }
        {/* <li className='movie_list__grain'>
          <div className='movie_list__left'>
            <img src={nowPlayingData.poster} alt={nowPlayingData.name}/>
          </div>
          <div className='movie_list__center'>
            <div className='movie_list__top'>
              <span className='name'>{nowPlayingData.name}</span>
              <span className='filmTypeName'>{nowPlayingData.filmType.name}</span>
            </div>
            <div className='movie_list__critic'>
              <span>观众评分</span>
              <span className='grade'>{nowPlayingData.grade}</span>
            </div>
            <div className='movie_list__protagonist'>
              主演：{nowPlayingData.actors.map(v => v.name + ' ')}
            </div>
            <div className='movie_list__nation'>
              {`${nowPlayingData.nation} | ${nowPlayingData.runtime}分钟`}
            </div>
          </div>
          <div className='movie_list__right'>
            <span className='movie_list__ticket'>购票</span>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default MovieList;
