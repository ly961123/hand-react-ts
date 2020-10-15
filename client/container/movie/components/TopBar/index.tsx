import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { TopBars } from '@rootDir/model/movie.ts';
import { Icon } from 'antd-mobile';
// import { useHistory } from 'react-router-dom';
import './index.scss';

interface IProps {
  tabs: TopBars[],
  topText: string,
  setTopText: Dispatch<SetStateAction<string>>,
  setList: () => void,
  showTopBar: boolean,
}

const CustomTopBar = ({
  tabs,
  topText,
  setTopText,
  setList,
  showTopBar,
}: IProps) => {
  // const history = useHistory();

  const setTopBarText = (key: string) => {
    setTopText(key);
    setList();
  };

  useEffect(() => {

    console.log(showTopBar, 'showTopBar');
  }, [showTopBar]);
  
  // const goDetails = (id: number) => {
  //   history.push(`/movie/${id}/details`)
  // };

  return (
    <div className={showTopBar ? 'movie_top_bar show_top_bar' : 'movie_top_bar'}>
      <div className='movie_top_bar__top' style={{display: showTopBar ? 'flex' : 'none'}}>
        <div className='movie_top_bar__top_left'>
          <span>深圳</span>
          <Icon
            type='down'
            size='xxs'
          />
        </div>
        <div className='movie_top_bar__top_right'>电影</div>
        <div style={{width: '70px'}}></div>
      </div>
      <div className='movie_top_bar__bottom'>
        {
          tabs.map((v) =>
            <div
              className='top_bar_cut'
              key={v.key}
              onClick={() => setTopBarText(v.key)}
            >
              <span className={topText === v.key ? 'cut_span_active' : 'cut_span'}>{v.title}</span>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default CustomTopBar;
