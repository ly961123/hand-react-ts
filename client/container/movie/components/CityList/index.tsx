import React, { MouseEvent } from 'react';
import { ICityList } from '@rootDir/model/movie.ts';
import './index.scss';

type IProps = {
  goMovies: (city: any, location?: number) => void,
  handleMonogramClick: (e: MouseEvent, text: string) => void,
  currentCity: string,
  hotCity: ICityList[],
  cityData: any,
};

const CityList = ({
  goMovies,
  handleMonogramClick,
  currentCity,
  hotCity,
  cityData,
}: IProps) => {
  return (
    <div className='city__bottom'>
      <div className='city__list'>
        <div className='city__hot'>
          <div className='city__gprs'>
            <span>GPS定位你所在城市</span>
            <ul>
              <li onClick={() => goMovies(currentCity, 1)}>{currentCity}</li>
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
                    cityData[v].map((item: any, index: number) =>
                      <li key={index} onClick={() => goMovies(item)}>{item.name}</li>)
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
  );
}

export default CityList;
