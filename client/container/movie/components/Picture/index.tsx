import React, { useState } from 'react';
import { Icon } from 'antd-mobile';
import Carousels from '../Carousels';
import './index.scss';

interface IPorps {
  stagePhoto: string[]
  setShowPicture: (show: boolean) => void;
}

const Picture = ({
  stagePhoto,
  setShowPicture,
}: IPorps ) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  console.log(stagePhoto, 'stagePhoto');
  
  return (
    <div className='movie_picture'>
      {
        !showCarousel ?
          <div className='movie_picture_overview'>
            <div className='movie_picture_top'>
              <div>
                <Icon
                  type='left'
                  size='md'
                  onClick={() => setShowPicture(false)}
                />
              </div>
              <span>剧照（{stagePhoto.length || 0}）</span>
            </div>
            <div className='movie_picture_content'>
              <ul>
                {
                stagePhoto?.map((v, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setShowCarousel(true);
                        setShowIndex(i);
                      }}
                    >
                      <img src={v}/>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </div> : <Carousels
            stagePhoto={stagePhoto}
            showIndex={showIndex}
            setShowCarousel={setShowCarousel}
          />
      }
    </div>
  );
}

export default Picture;
