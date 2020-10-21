import React, { useEffect, useState, useContext, MouseEvent } from 'react';
import apiClient from '@rootDir/client/apiClient';
import { GlobalState } from '../../application/index';
import { RouteComponentProps } from 'react-router-dom';
import { Icon, SearchBar, Toast } from 'antd-mobile';
import { ICityDetail, ICityList } from '@rootDir/model/movie.ts';
import SearchResult from '../components/SearchResult';
import { location } from '@rootDir/client/utils/location';
import './index.scss';

const City = ({
  match,
  history,
}: Pick<RouteComponentProps<{cityId: string}>, 'match' | 'history'>) => {
  const { cityId } = match.params;
  const { setShowToast, setCity } = useContext(GlobalState);
  const [cityList, setCityList] = useState<ICityList[]>([]);
  const [cityData, setData] = useState<any>({});
  const [hotCity, setHotCity] = useState<ICityList[]>([]);
  const [searchCity, setSearchCity] = useState<ICityList[]>([]);
  const [showCityList, setShowCityList] = useState(true);
  const [currentCity, setCurrentCity] = useState('');
  const [selectiveCity, setSelectiveCityCity] = useState('');

  const fetchDetail = async () => {
    const data: ICityDetail = await apiClient.get(
      `movie/city`,
      {
        params: { cityId },
      },
    );
    return data;
  };

  const setCityData = (list: ICityList[]) => {
    setCityList(list);
    let data: any = {};
    list.map((v) => {
      if (!data[v.pinyin.split('')[0].toUpperCase()]) {
        return data[v.pinyin.split('')[0].toUpperCase()] = [v];
      }
      return data[v.pinyin.split('')[0].toUpperCase()] = data[v.pinyin.split('')[0].toUpperCase()].concat(v);
    })
    setData(data);
    setHotCity(list.filter(v => v.isHot));
  };

  useEffect(() => {
    setShowToast(true);
    fetchDetail().then((res: ICityDetail) => {
      setCityData(res.data);
      setShowToast(false);
      location().then((AMap)=>{
        AMap.plugin('AMap.CitySearch', () => {
          const citySearch = new AMap.CitySearch()
          citySearch.getLocalCity((status: any, result: any) => {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              setCurrentCity(result.city);
              setSelectiveCityCity(res.data.filter(v => v.cityId === Number(cityId))[0]?.name || result.city);
              console.log(result, '当前所在城市信息');
            }
          });
        });
      }).catch(e => {
        Toast.fail(e, 1);
      })
    }).catch((err) => {
      Toast.fail(err, 1);
      setShowToast(false);
    });
  }, []);

  const handleMonogramClick = (e: MouseEvent, text: string) => {
    Toast.info(text, 1);
    const ix = Number(e.currentTarget.getAttribute('data-ix'));
    const layout = document.querySelector('.city__list');
    const titles = document.querySelectorAll('.city__parse li > p');
    const title = titles[ix];
    const rect = title.getBoundingClientRect();
    layout?.scrollTo({
      top: rect.top + layout.scrollTop - 130,
      behavior: 'auto',
    });
  };

  const searchBarChange = (value: string) => {
    const pattern = new RegExp("[\u4E00-\u9FA5]+");
    const list = cityList.filter(v => pattern.test(value.split('')[0]) ? v.name.includes(value) : v.pinyin.includes(value));
    if (value) {
      setShowCityList(false);
      setSearchCity(list);
      return;
    }
    setSearchCity([]);
  };

  const goMovies = (city: any, location = 0) => {
    let cityData = city;
    if (location) {
      cityData = cityList.filter(v => city.includes(v.name))[0];
    }
    setCity({ id: cityData?.cityId, name: cityData?.name});
    history.push('/movie');
  };

  return (
    <div className='city'>
      <div className='city__top'>
        <div className='city__headline'>
          <div className='city__cross'>
            <Icon
              type='cross'
              size='lg'
              onClick={() => history.push('/movie')}
            />
          </div>
          <div className='city__current_city'>当前城市 - {selectiveCity}</div>
          <div style={{width: '53px'}}></div>
        </div>
        <div className='city__search'>
          <SearchBar
            placeholder='输入城市名或拼音'
            maxLength={20}
            onChange={(value) => searchBarChange(value)}
            onCancel={(value) => setShowCityList(value ? false : true)}
          />
        </div>
      </div>
      {
        showCityList
          ? <div className='city__bottom'>
              <div className='city__list'>
                <div className='city__hot'>
                  <div className='city__gprs'>
                    <span>GPS定位你所在城市</span>
                    <ul>
                      <li  onClick={() => goMovies(currentCity, 1)}>{currentCity}</li>
                    </ul>
                  </div>
                  <div className='city__hot_list'>
                    <span>热门城市</span>
                    <ul>
                      {
                        hotCity.map((v, i) => <li key={i} onClick={() => goMovies(v)}>{v.name}</li>)
                      }
                    </ul>
                  </div>
                </div>
                <ul className='city__parse'>
                  {
                    Object.keys(cityData).sort().map((v, i) => {
                      return <li key={i}>
                        <p>{v}</p>
                        <ul>
                          {
                            cityData[v].map((item: any, index: number) => <li key={index} onClick={() => goMovies(item)}>{item.name}</li>)
                          }
                        </ul>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className='city__monogram'>
                <ul>
                  {
                    Object.keys(cityData).sort().map((v, i) =>
                      <li
                        key={i}
                        data-ix={i}
                        onClick={(e: MouseEvent) => handleMonogramClick(e, v)}
                      >
                        {v}
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          : <SearchResult
              searchCity={searchCity}
              goMovies={goMovies}
            />
      }
    </div>
  );
}

export default City;
