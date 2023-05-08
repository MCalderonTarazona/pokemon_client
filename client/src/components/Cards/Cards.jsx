import React from 'react';
import style from './Cards.module.css';
import Detail from '../Detail/Detail';
import Card from '../Card/Card';
import Paginate from '../Paginate/Paginate';
import { useSelector } from "react-redux";

const Cards = ({onSearch}) => {
  const {viewCharacters, numPage, filterGroup, text}  = useSelector(state => state);

  let start = (numPage - 1) * 12;
  let end = numPage * 12;

  let cantPages = Math.ceil(viewCharacters.length / 12);
  let characters = viewCharacters?.slice(start, end);

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
                  { (text === "" || filterGroup === "name" ) && typeof text !== "number"
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
              <div className = {style.containerPaginate}><Paginate cantPages={cantPages}></Paginate></div>
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