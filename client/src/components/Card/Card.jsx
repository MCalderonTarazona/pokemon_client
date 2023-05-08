import React from 'react';
import style from './Card.module.css';
import desconocido from "../../img/desconocido.png";

const Card = ({id, image, name, types, attack, onSearch}) => {
    
  return (
    <>
    <div className = {style.containerCard}>

        {image === null
        ?<img src={desconocido} alt='' />
        :<img src={image} alt='' />
        }

        <div className = {style.containerBox} >
            <div># {id}</div>
            <div>{name}</div>
            <div>(Atk {attack})</div>
            <div>{types.map((e) => "[ "+e+" ]" )} </div>
            <div className = {style.containerClick} onClick={()=>{onSearch({type:"id",text:id})}} >( + )</div>
        </div>
    </div>
    </>
  );
}

export default Card;