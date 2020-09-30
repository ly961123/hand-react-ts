import React from 'react';
import { Icon } from 'antd-mobile';
import './index.scss';

interface IPorps {
  stagePhoto: string[]
  setShowPicture: (show: boolean) => void;
}

const Picture = ({
  stagePhoto,
  setShowPicture,
}: IPorps ) => {
  console.log(stagePhoto, 'stagePhoto');
  
  return (
    <div className='movie_picture'>
      <div className='movie_picture_top'>
        <div>
          <Icon
            type='left'
            size='md'
            onClick={() => setShowPicture(false)}
          />
        </div>
        <span>剧照（0）</span>
      </div>
      <div className='movie_picture_content'>
        <ul>
          {
            stagePhoto?.map((v, i) => {
              return  <li key={i}>
                <img src={v}/>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Picture;
