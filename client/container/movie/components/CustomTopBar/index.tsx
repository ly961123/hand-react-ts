import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import './index.scss';

interface TopBars {
  title: string;
  key: string;
}

const tabs: TopBars[] = [
  { title: '正在热映', key: 'now' },
  { title: '即将上映', key: 'about' },
];

const CustomTopBar = () => {
  // const history = useHistory();
  const [topText, setTopText] = useState('');
  useEffect(() => {
    setTopText('now');
  }, []);

  const setTopBarText = (key: string) => {
    setTopText(key);
  };

  // const goDetails = (id: number) => {
  //   history.push(`/movie/${id}/details`)
  // };

  return (
    <div className='top_bar'>
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
  );
}

export default CustomTopBar;
