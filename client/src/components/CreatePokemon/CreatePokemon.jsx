import React from 'react';
import style from './CreatePokemon.module.css';
import validation from '../../validation';
import { useState } from 'react';

const CreatePokemon = ({createPokemon}) => {

const [userData,setUsedata] = useState({
    name:"",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    hp: 50,
    attack: 50,
    defense: 50,
    speed: 50,
    height: 50,
    weight: 50,
    types: ["flying","shadow"]
});

const [errors,setErrors] = useState({
    name:"",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: ""
});

const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]:event.target.value}));
    setUsedata({...userData,[event.target.name]:event.target.value});  
};

const handleSubmit = (event) => {
    event.preventDefault();
    createPokemon(userData);  
};

  
  return (
    <div >
      <div className={style.containerForm}>
          <form onSubmit={handleSubmit}>
            <div className={style.containerRange}>
                <label for="name">Name </label>
                <input className={style.inputForm}
                    type="text"
                    name="name" 
                    value={userData.name} 
                    onChange={handleChange}
                    placeholder='Enter your name' />
            </div>
            <p className={style.errorForm}>{errors.name && <div> {errors.name}</div>}</p>
            <div className={style.containerRange}>
                <label for="hp">Health Points </label>
                <input id="hp" type="range" name="hp" onChange={handleChange} value={userData.hp} />
                <label for="hp">{userData.hp}</label>
            </div>
            <p className={style.error} >{errors.hp}</p>
            <div className={style.containerRange}>
                <label for="attack">Attack </label>
                <input type="range" name="attack" onChange={handleChange} value={userData.attack} />
                <label for="attack">{userData.attack}</label>
            </div>
            <p className={style.error} >{errors.attack}</p>
            <div className={style.containerRange}>
                <label for="defense">Defense </label>
                <input type="range" name="defense" onChange={handleChange} value={userData.defense}/>
                <label for="defense">{userData.defense}</label>
            </div>
            <p className={style.error} >{errors.defense}</p>
            <div className={style.containerRange}>
                <label for="speed">Speed </label>
                <input type="range" name="speed" onChange={handleChange} value={userData.speed} />
                <label for="speed">{userData.speed}</label>
            </div>
            <p className={style.error} >{errors.speed}</p>
            <div className={style.containerRange}>
                <label for="height">Height </label>
                <input type="range" name="height" onChange={handleChange} value={userData.height} />
                <label for="height">{userData.height}</label>
            </div>
            <p className={style.error} >{errors.height}</p>
            <div className={style.containerRange}>
                <label for="weight">Weight </label>
                <input type="range" name="weight" onChange={handleChange} value={userData.weight} />
                <label for="weight">{userData.weight}</label>
            </div>
            <p className={style.error} >{errors.weight}</p>
            <button className={style.buttonForm} type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default CreatePokemon;