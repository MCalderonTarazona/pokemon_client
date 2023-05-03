import React from 'react';
import style from './Detail.module.css';
import desconocido from "../../img/desconocido.png";


const Detail = ({ id, attack, defense, height, hp, image, name, speed, types, weight}) => {
   
  return (
    <>
    <div className = {style.containerDetail}>
      <div className = {style.containerName}>{name}</div>  
      <div className = {style.containerContent}>
        <div className = {style.containerContentLeft}>
            {image === null
            ?<img src={desconocido} alt='' />
            :<img src={image} alt='' />
            }
            <div className = {style.containerId}># {id}</div>
        </div>
        <div className = {style.containerContentRight}>
            <div>Attack : {attack}</div>
            <div>Defense : {defense}</div>
            <div>Speed : {speed}</div>
            <div>Hp : {hp}</div>
            <div>Height : {height}</div>
            <div>Weight : {weight}</div>
            <div>Type(s) : {types.map((e) => "[ "+e+" ]" )} </div>
        </div>
      </div> 
    </div>
    </>
  );
}

export default Detail;

