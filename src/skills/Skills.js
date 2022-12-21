import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
export const Skills = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h2 className={style.title}>My skills</h2>
        <div className={style.skills}>

        </div>
      </div>
    </div>
  );
}

