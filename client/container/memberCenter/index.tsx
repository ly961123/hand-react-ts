import React, { useState, useEffect } from 'react';
import NavBar from '@rootDir/client/component/NavBar'
import './index.scss';

const Order = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('会员中心');
  }, []);

  return (
    <div className='member_center'>
      <div className='member_center__top'>
        {text}
      </div>
      <NavBar/>
    </div>
  );
}

export default Order;
