import React,{ useState } from 'react';
import { Carousel, Icon } from 'antd-mobile';
import './index.scss';

interface IPorps {
  stagePhoto: string[];
  showIndex: number;
  setShowCarousel: (show: boolean) => void;
}

const Carousels = ({
  stagePhoto,
  showIndex,
  setShowCarousel,
}: IPorps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(showIndex);
  
  return (
    <div className='movie_carousels'>
      <div className='movie_carousels_top'>
        <div>
          <Icon
            type='cross'
            size='lg'
            onClick={() => setShowCarousel(false)}
          />
        </div>
        <span>{`${selectedIndex + 1}/${stagePhoto.length || 0}`}</span>
      </div>
      <div className='movie_carousels_content'>
        <Carousel
          autoplay={false}
          selectedIndex={selectedIndex}
          dots={false}
          beforeChange={(_, to) => setSelectedIndex(to)}
        >
          {
            stagePhoto.map((v, i) => {
              return  <div key={i}>
              <img src={v}/>
            </div>
            })
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Carousels;
