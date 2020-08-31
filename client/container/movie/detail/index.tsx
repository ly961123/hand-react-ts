import React, { useState, useEffect } from 'react';

const Order = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('详情');
  }, []);

  return (
    <div>{text}</div>
  );
}

export default Order;
