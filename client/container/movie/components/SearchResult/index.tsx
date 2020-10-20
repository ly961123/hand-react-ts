import React from 'react';
// import { RouteComponentProps } from 'react-router';;
import { ICityList } from '@rootDir/model/movie.ts';
import './index.scss';

type IProps = {
  searchCity: ICityList[],
};

const notCity = require('../../../../assets/image/notCity.png');

const SearchResult = ({
  searchCity
}: IProps) => {
  return (
    <div className='search_result'>
      {
        searchCity?.length
          ? <div className='search_result__list'>
              <ul>
                {
                  searchCity.map((v, i) => <li key={i}>{v.name}</li>)
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
