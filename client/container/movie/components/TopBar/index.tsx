import React, { Dispatch, SetStateAction } from 'react';
import { TopBars } from '@rootDir/model/movie.ts'
// import { useHistory } from 'react-router-dom';
import './index.scss';

interface IProps {
  tabs: TopBars[],
  topText: string,
  setTopText: Dispatch<SetStateAction<string>>,
  setList: () => void,
}

const CustomTopBar = ({
  tabs,
  topText,
  setTopText,
  setList,
}: IProps) => {
  // const history = useHistory();

  const setTopBarText = (key: string) => {
    setTopText(key);
    setList();
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
