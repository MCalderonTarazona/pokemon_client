import React from 'react';
import style from './CreatePokemon.module.css';
import validation from '../../validation';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const CreatePokemon = ({createPokemon, createPokemoData}) => {

const [typesData,setTypesData] = useState({
    types: []
});

const [userData,setUsedata] = useState({
    name:"",
    image: "",
    hp: 50,
    attack: 50,
    defense: 50,
    speed: 50,
    height: 50,
    weight: 50,
    types: []
});

const [errors,setErrors] = useState({
    name:"",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: []
});

useEffect(() => {
    axios
        .get(`http://localhost:3001/types`)
        .then((results) => {
        setTypesData({types:results.data})
    });
}, []);

const handleTypes = (select) => {
    if (userData.types.includes(select)) {
      let typesSelect = userData.types.filter(element => element !== select)
      setUsedata({...userData, types: typesSelect})
    } else {
      setUsedata({...userData, types: userData.types.concat(select)})
    }
};

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
      <Link className={style.registerForm} to="/home" onClick={() => createPokemoData()}>Back</Link>
          <form onSubmit={handleSubmit}>
            <div className={style.containerFormValues} >
                <div className={style.containerRange}>
                    <label for="name">Name&nbsp;</label>
                    <input className={style.inputForm}
                        type="text"
                        name="name" 
                        value={userData.name} 
                        onChange={handleChange}
                        placeholder='Enter your name' />
                </div>
                <p className={style.errorForm}>{errors.name && <div> {errors.name}</div>}</p>
                <div className={style.containerRange}>
                    <label htmlFor="image">Image Url&nbsp;</label>
                    <input className={style.inputForm}
                        type="text"
                        name="image" 
                        value={userData.image} 
                        onChange={handleChange}
                        placeholder='Enter image URL' />
                </div>
                <p className={style.errorForm}>{errors.image && <div> {errors.image}</div>}</p>
                <div className={style.containerRange}>
                    <label for="hp">Health Points </label>
                    <input id="hp" type="range" name="hp" onChange={handleChange} value={userData.hp} />
                    <label for="hp">&nbsp;{userData.hp}</label>
                </div>
                <p className={style.error} >{errors.hp}</p>
                <div className={style.containerRange}>
                    <label for="attack">Attack </label>
                    <input type="range" name="attack" onChange={handleChange} value={userData.attack} />
                    <label for="attack">&nbsp;{userData.attack}</label>
                </div>
                <p className={style.error} >{errors.attack}</p>
                <div className={style.containerRange}>
                    <label for="defense">Defense </label>
                    <input type="range" name="defense" onChange={handleChange} value={userData.defense}/>
                    <label for="defense">&nbsp;{userData.defense}</label>
                </div>
                <p className={style.error} >{errors.defense}</p>
                <div className={style.containerRange}>
                    <label for="speed">Speed </label>
                    <input type="range" name="speed" onChange={handleChange} value={userData.speed} />
                    <label for="speed">&nbsp;{userData.speed}</label>
                </div>
                <p className={style.error} >{errors.speed}</p>
                <div className={style.containerRange}>
                    <label for="height">Height </label>
                    <input type="range" name="height" onChange={handleChange} value={userData.height} />
                    <label for="height">&nbsp;{userData.height}</label>
                </div>
                <p className={style.error} >{errors.height}</p>
                <div className={style.containerRange}>
                    <label for="weight">Weight </label>
                    <input type="range" name="weight" onChange={handleChange} value={userData.weight} />
                    <label for="weight">&nbsp;{userData.weight}</label>
                </div>
                <p className={style.error} >{errors.weight}</p>
            </div>
            <div className={style.containerType}>
                {typesData.types.map((type, index) => (
                    <div key={index} className={`${style.buttonType} ${style[`type-${type}`]} ${userData.types.includes(type) ? style.buttonTypeActive : ""}`} onClick={() => handleTypes(type)}>{type}</div>
                ))}
            </div>
            <div className={style.containerButton}>
                <button className={style.buttonForm} type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default CreatePokemon;