import React,{ useState } from 'react';
import { Icon } from 'antd-mobile';
import moment from 'moment';
import { NowPlayingData } from '@rootDir/model/movie.ts';
import './index.scss';

interface IPorps {
  movieDetail: NowPlayingData;
  textHeight: number;
  setShowPicture: (show: boolean) => void;
}

const Content = ({
  movieDetail,
  textHeight,
  setShowPicture,
}: IPorps) => {
  const [type, setType] = useState('down');

  const checkType = (type: string) => {
    setType(type === 'down' ? 'up' : 'down')
  };

  return (
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
      <div className='movie_detail_bottom'>选座购票</div>
    </div>
  );
}

export default Content;
