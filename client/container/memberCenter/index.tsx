import React, { useState, useEffect } from 'react';
import NavBar from '@rootDir/client/component/NavBar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button } from 'antd-mobile';
import './index.scss';

const Order = () => {
  const [text, setText] = useState('');
  // const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  useEffect(() => {
    setText('会员中心');
  }, []);

  return (
    <div className='member_center'>
      <div className='member_center__top'>
        {text}
        <div className='square_wrapper'>
          <TransitionGroup>
            <CSSTransition
              // in={show}
              key={num}
              timeout={500}
              classNames='page'
              unmountOnExit={true}
            >
              <div className='hhhh'>
                {num}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Button
          onClick={() => setNum((num + 1) % 2)}
          size='small'
          inline
        >
          动画
        </Button>
      </div>
      <NavBar/>
    </div>
  );
}

export default Order;
