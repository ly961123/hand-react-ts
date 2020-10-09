import React,{ useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import moment from 'moment';
import { NowPlayingData } from '@rootDir/model/movie.ts';
import './index.scss';

type IPorps = {
  movieDetail: NowPlayingData;
  textHeight: number;
  setShowPicture: (show: boolean) => void;
} & Pick<RouteComponentProps, 'history'>

const maxScroll = 40;

const Content = ({
  history,
  movieDetail,
  textHeight,
  setShowPicture,
}: IPorps) => {
  const [type, setType] = useState('down');
  const [showHead, setShowHead] = useState(false);

  const checkType = (type: string) => {
    setType(type === 'down' ? 'up' : 'down')
  };

  const onscroll = () => {
    const dom = document.getElementById('movie_detail_center');
    const scrollTop = dom?.scrollTop || 0;
    setShowHead(scrollTop > maxScroll ? true : false);
  };

  useEffect(() => {
    const dom = document.getElementById('movie_detail_center');
    dom?.addEventListener('scroll', onscroll);
    console.log('进来了');
    return () => {
      dom?.removeEventListener('scroll', onscroll);
    }
  }, []);

  return (
    <div className='movie_content'>
      <div className={showHead ? 'movie_detail_top show_head' : 'movie_detail_top'}>
        <div className='detail_top_left' onClick={() => history.push('/movie')}>
          <Icon
            type='left'
            size='lg'
          />
        </div>
        <div className='detail_top_right' style={{display: showHead ? 'block' : 'none'}}>
          {movieDetail.name}
        </div>
      </div>
      <div id='movie_detail_center'>
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
