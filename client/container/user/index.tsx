import React, { useState, useEffect } from 'react';
import NavBar from '@rootDir/client/component/NavBar'
import './index.scss';

const Order = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('我的');
  }, []);

  return (
    <div className='user'>
      <div className='user__top'>
        {text}
      </div>
      <NavBar/>
    </div>
  );
}

export default Order;
