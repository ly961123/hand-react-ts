import React, { useState, useEffect, useContext, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { Icon } from 'antd-mobile';
import moment from 'moment';
import apiClient from '@rootDir/client/apiClient';
import { IMovieDetail, NowPlayingData } from '@rootDir/model/movie.ts';
import { GlobalState } from '../../application/index';
import Picture from '../components/Picture';
import './index.scss';

const defaultMovieData = {
  id: '',
  name: '',
  nation: '',
  poster: '',
  grade: '',
  runtime: 0,
  filmType: {
    name: '',
    value: 0,
  },
  actors: [],
  premiereAt: 0,
  synopsis: '',
  photos: '',
  stagePhoto: [],
}

const Detail = ({
  match,
}: Pick<RouteComponentProps<{movieId: string}>, 'match'>) => {
  const { movieId } = match.params;
  const { setShowToast } = useContext(GlobalState);
  const [movieDetail, setMovieDetail] = useState<NowPlayingData>(defaultMovieData);
  const [type, setType] = useState('down');
  const [showPicture, setShowPicture] = useState(false);
  const [textHeight, setTextHeight] = useState(0);

  const fetchDetail = async () => {
    const data: IMovieDetail = await apiClient.get(
      `movie/${movieId}/detail`,
      {
        params: { movieId },
      },
    );
    return data;
  };
  console.log(movieDetail, 'movieDetail');
  
  useEffect(() => {
    setShowToast(true);
    fetchDetail().then((res: IMovieDetail) => {
      setMovieDetail(res.data);
      setShowToast(false);
    }).catch((err) => {
      console.log(err, '出错了');
      setShowToast(false);
    })
  }, []);

  useEffect(() => {
    getTextHeight();
  },[movieDetail])

  const getTextHeight = useCallback(() => {
    const ele = document.getElementById('center_describe_text');
    setTextHeight(ele?.offsetHeight || 0);
  },[movieDetail]);

  const checkType = (type: string) => {
    setType(type === 'down' ? 'up' : 'down')
  };

  return (
    <div className='movie_detail'>
      {
      !showPicture ?
      <div className='movie_content'>
        <div className='movie_detail_top'>top</div>
        <div className='movie_detail_center'>
          <div className='movie_detail_center_describe'>
            <div className='center_img'>
              <img src={movieDetail.photos || ''}/>
            </div>
            <div className='center_describe'>
              <div className='center_describe_name'>
                <div>
                  {movieDetail.name}
                  <span>{movieDetail.filmType.name}</span>
                </div>
                <span>{movieDetail.grade}分</span>
              </div>
              <div className='center_describe_details'>
                <div>剧情 | 历史 | 战争</div>
                <div>{moment(movieDetail.premiereAt).format('YYYY-MM-DD')}上映</div>
                <div>{movieDetail.nation} | {movieDetail.runtime}分钟</div>
              </div>
              <div 
                className={
                  type === 'up' ?
                    'center_describe_history'
                    : 'center_describe_history hide'
                }
                style={{height: `${textHeight}px`}}
              >
                <span id='center_describe_text'>{movieDetail.synopsis}</span>
              </div>
              <div className='center_describe_toggle'>
                <Icon
                  type={type}
                  size='xxs'
                  onClick={() => checkType(type)}
                />
              </div>
            </div>
          </div>
          <div className='movie_detail_center_actor'>
            <div className='actor_top'>演员人员</div>
            <div className='actor_bottom'>
              <ul>
                {
                  movieDetail.actors?.map((v, i) => {
                    return <li key={i}>
                      <div>
                        <img src={v.avatarAddress} />
                      </div>
                      <span className='name'>{v.name}</span>
                      <span>{v.role}</span>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className='movie_detail_center_picture'>
            <div className='picture_top'>
              <span>剧照</span>
              <span
                className='picture_all'
                onClick={() => setShowPicture(true)}
              >
                <span>全部(5)</span>
                <Icon
                  type='right'
                  size='xxs'
                />
              </span>
            </div>
            <div className='picture_bottom'>
              <ul>
                {
                  movieDetail.stagePhoto?.map((v, i) => {
                    return <li key={i}>
                      <img src={v}/>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='movie_detail_bottom'>bottom</div>
      </div> : <Picture
          stagePhoto={movieDetail.stagePhoto}
          setShowPicture={setShowPicture}
        />
      }
    </div>
  );
}

export default Detail;
