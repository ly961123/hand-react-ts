import React from 'react';
import { ICityList } from '@rootDir/model/movie.ts';
import './index.scss';

type IProps = {
  searchCity: ICityList[],
  goMovies: (city: ICityList) => void,
};

const notCity = require('../../../../assets/image/notCity.png');

const SearchResult = ({
  searchCity,
  goMovies,
}: IProps) => {
  return (
    <div className='search_result'>
      {
        searchCity?.length
          ? <div className='search_result__list'>
              <ul>
                {
                  searchCity.map((v, i) => <li key={i} onClick={() => goMovies(v)}>{v.name}</li>)
                }
              </ul>
            </div>
          : <div className='search_result__notCity'>
              <img src={notCity.default} alt='1'/>
            </div>
      }
    </div>
  );
}

export default SearchResult;
