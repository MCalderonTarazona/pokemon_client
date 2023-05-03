import React from 'react';
import style from './Cards.module.css';
import Detail from '../Detail/Detail';
import Card from '../Card/Card';

const Cards = ({characters, selection, onSearch}) => {

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
                  { selection === "1"
                    ? characters.map((e) => {
                      console.log(e.image);
                      return <Card
                      key={e.id} 
                      id={e.id}
                      attack={e.attack} 
                      defense={e.defense}
                      height={e.height}
                      hp={e.hp} 
                      image={e.image}
                      name={e.name}
                      speed={e.speed}
                      types={e.types}
                      weight={e.weight}
                      onSearch={onSearch}
                      />
                    })    
                    : characters.map((e) => {
                      return <Detail
                      key={e.id} 
                      id={e.id}
                      attack={e.attack} 
                      defense={e.defense}
                      height={e.height}
                      hp={e.hp} 
                      image={e.image}
                      name={e.name}
                      speed={e.speed}
                      types={e.types}
                      weight={e.weight}
                      />
                    })    
                  }
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