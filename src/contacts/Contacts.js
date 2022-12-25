import React from 'react';
import style from './Contacts.module.css';

import styleContainer from './../common/styles/Container.module.css';

export const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h2 className={style.title}>Контакты</h2>
        <form className={style.form}>
          <input type={'text'} placeholder={'Enter your name...'}></input>
          <input type={'email'} placeholder={'Enter your email...'}></input>
          <textarea className={style.textarea} placeholder={'Enter message...'} rows={5}></textarea>
          <input type={'submit'} value={'Отправить'} className={style.button} />
        </form>
      </div>
    </div>
  );
};
