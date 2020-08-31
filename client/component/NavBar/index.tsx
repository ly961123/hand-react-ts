import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

interface NavBars {
  path: string;
  icon: string;
  text: string;
}

const NavBar = () => {
  const [text, setText] = useState('');
  const barList: NavBars[] = [
    {
      path: '/movie',
      icon: 'icontianchongxing-',
      text: '电影'
    },
    {
      path: '/memberCenter',
      icon: 'iconyingyuan',
      text: '影院'
    },
    {
      path: '/cart',
      icon: 'iconzixun1',
      text: '资讯'
    },
    {
      path: '/user',
      icon: 'iconwode',
      text: '我的'
    }
  ];

  useEffect(() => {
    setText('购物袋');
    console.log(text);
  }, []);

  return (
    <div className="nav-bar">
      <ul>
        {
          barList.map((v: NavBars) => {
            return <li key={v.icon}>
              <NavLink to={v.path}>
                <i className={`icon iconfont ${v.icon}`}></i>
                <span>{v.text}</span>
              </NavLink>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default NavBar;
