import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        
          <span className={style.text}>Alex Maystrenko</span>
          <div className={style.block}>
            <div className={style.grey}></div>
            <div className={style.grey}></div>
            <div className={style.grey}></div>
            <div className={style.grey}></div>
          </div>
          <span className={style.text}>&copy;2022 Все права защищены</span>
        
      </div>
    </div>
  );
};
