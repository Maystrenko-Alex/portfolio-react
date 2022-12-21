import React from 'react';
import style from './Header.module.css';
import { Nav } from '../nav/Nav';

export const Header = () => {
  return (
    <div className={style.wrapper}>
      
      <Nav />
    </div>
  );
}

