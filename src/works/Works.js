import React from 'react';
import style from './Works.module.css';
// import styleContainer from './../common/styles/Container.module.css';

export const Works = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.title}>My projects</h2>
        <div className={style.items}>
          <Work
            name={'Project 1'}
            description={'Lorem, ipsum dolor sit amet consectetur adipising elit. Earum voluptatem fugiat' +
              ' labore quia ad enim possimus commodi sapiente tempore.'} />
          <Work
            name={'Project 2'}
            description={'Lorem, ipsum dolor sit amet consectetur adipising elit. Earum voluptatem fugiat' +
              ' labore quia ad enim possimus commodi sapiente tempore. dolor sit amet consectetur adipising elit. Earum' +
              ' voluptatem quia ad enim possimus.'} />
        </div>
      </div>
    </div>
  );
};



const Work = (props) => {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <button>Смотреть</button>
      </div>
      <div className={style.textBlock}>
        <h3 className={style.name}>{props.name}</h3>
        <span className={style.description}>
          {props.description}
        </span>
      </div>
    </div>
  );
};
