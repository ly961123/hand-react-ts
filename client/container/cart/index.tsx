import React, { useState, useEffect } from 'react';
import NavBar from '@rootDir/client/component/NavBar'
import './index.scss';

const Order = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('购物车');
  }, []);

  return (
    <div className='cart'>
      <div className='cart__top'>
        {text}
      </div>
      <NavBar/>
    </div>
  );
}

export default Order;
