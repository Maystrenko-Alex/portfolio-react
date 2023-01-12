import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <span className={style.title}>Контакты</span>
        <form className={style.form}>
          <input className={style.formItem} type={'text'} placeholder={'Name...'}></input>
          <input className={style.formItem} type={'email'} placeholder={'Email...'}></input>
          <textarea className={style.formItem} placeholder={'Enter message...'} rows={5}/>
        </form>
          <button  className={style.button} >Отправить</button>
      </div>
    </div>
  );
};
