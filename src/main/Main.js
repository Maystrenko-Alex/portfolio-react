import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>I am Aleks</h1>
          <p>I am Frontend Developer</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
};