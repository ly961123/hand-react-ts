import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'antd-mobile';
import { GlobalState } from '@rootDir/client/container/application';
import './index.scss';

const Loading = () => {
  const [text, setText] = useState('');
  const { showToast } = useContext(GlobalState);
  useEffect(() => {
    console.log(text, 'text');
    setText('详情');
  }, []);

  return (
    <div className='loading' style={{display: showToast ? 'block' : 'none'}}>
      <div>
        <Icon type='loading' size='lg' />
        <span>加载中...</span>
      </div>
    </div>
  );
}

export default Loading;
