import React from 'react';
import style from './Cards.module.css';

const Cards = () => {

  return (
    <>
    <div className = {style.container}>
      <div className = {style.containerLeft}>
        <div className = {style.containerLeftUp}></div>
        <div className = {style.containerLeftDown}></div>
      </div>
      <div className = {style.containerBorder}>
          <div className = {style.containerScreenExt} >
              <div className = {style.containerScreenInt}>
                <div className = {style.containerCards}>
                  <h1>Contenido</h1>
                </div>
              </div>
          </div>
      </div>
      <div className = {style.containerRight}>
        <div className = {style.containerRightUp}></div>
        <div className = {style.containerRightDown}></div>
      </div>
    </div>
    </>
  );
}

export default Cards;