import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
  useState,
} from 'react';
import { TopBars } from '@rootDir/model/movie.ts';
import { location } from '@rootDir/client/utils/location';
import { Icon, Toast } from 'antd-mobile';
import { RouteComponentProps } from 'react-router-dom';
import { GlobalState } from '../../../application/index';
import './index.scss';

type IProps = {
  tabs: TopBars[],
  topText: string,
  setTopText: Dispatch<SetStateAction<string>>,
  setList: () => void,
  showTopBar: boolean,
} & Pick<RouteComponentProps, 'history'>

const CustomTopBar = ({
  tabs,
  topText,
  setTopText,
  setList,
  showTopBar,
  history,
}: IProps) => {
  const { city } = useContext(GlobalState);
  const [currentCity, setCurrentCity] = useState('');

  const setTopBarText = (key: string) => {
    setTopText(key);
    setList();
  };

  useEffect(() => {
    location().then((AMap)=>{
      AMap.plugin('AMap.CitySearch', () => {
        const citySearch = new AMap.CitySearch()
        citySearch.getLocalCity((status: any, result: any) => {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            setCurrentCity(result.city);
            console.log(result, '当前所在城市信息');
          }
        });
      });
    }).catch(e => {
      Toast.fail(e, 1);
    })
  }, []);

  return (
    <div className={showTopBar ? 'movie_top_bar show_top_bar' : 'movie_top_bar'}>
      <div className='movie_top_bar__top' style={{display: showTopBar ? 'flex' : 'none'}}>
        <div className='movie_top_bar__top_left' onClick={() => history.push(`movie/${city.id || 0}/city`)}>
          <span>{city.name || currentCity}</span>
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
