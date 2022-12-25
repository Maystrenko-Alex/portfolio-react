import React from 'react';
import style from './DistantWork.module.css';

export const DistantWork = () => {
  return (
    <div className={style.wrapper}>
      <div className={` ${style.container}`}>
        <span className={style.title}>Рассматриваю варианты удаленной работы</span>
        <button className={style.button}>Нанять меня</button>
      </div>
    </div>
  );
};
