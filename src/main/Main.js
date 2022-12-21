import React from "react";
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <div className={style.greetings}>
          <span>Привет!</span>
          <h1>Меня зовут Александр</h1>
          <p>Я - фронтенд-разработчик</p>
        </div>
        <div className={style.foto}></div>
      </div>
    </div>
  );
}