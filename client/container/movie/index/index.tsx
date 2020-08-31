import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd-mobile';
import NavBar from '@rootDir/client/component/NavBar'
import CustomTopBar from '../components/CustomTopBar'
import './index.scss';

const Movie = () => {
  const history = useHistory();
  const [text, setText] = useState('');
  useEffect(() => {
    setText('首页');
  }, []);

  const goDetails = (id: number) => {
    history.push(`/movie/${id}/details`)
  };

  return (
    <div className='movie'>
      <div className='movie__top'>
        <CustomTopBar/>
        {text}
        <Button
          onClick={() => goDetails(1111)}
          size='small'
          inline
        >
          去详情
        </Button>
      </div>
      <NavBar/>
    </div>
  );
}

export default Movie;
