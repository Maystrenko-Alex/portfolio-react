import React from "react";
import style from './nav.module.css';

export const Nav = () => {
  return (
    <div className={style.wrapper}>
      <a href={'#'} alt={''}>Главная</a>
      <a href={'#2'} alt={''}>Скиллы</a>
      <a href={'#3'} alt={''}>Проекты</a>
      <a href={'#4'} alt={''}>Контакты</a>
    </div>
  );
}