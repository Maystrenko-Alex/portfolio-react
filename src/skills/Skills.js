import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import { Skill } from './skill/Skill';
export const Skills = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h2 className={style.title}>My skills</h2>
        <div className={style.skills}>
          <Skill title={'Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing.'}/>
          <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet consectetur adipisicing.  consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.  consectetur adipisicing'}/>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit amet'}/>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit amet'}/>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit amet'}/>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit amet'}/>
        </div>
      </div>
    </div>
  );
}

