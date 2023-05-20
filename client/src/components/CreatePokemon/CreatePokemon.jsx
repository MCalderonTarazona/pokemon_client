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
    image:"",
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
        .get(`https://pokemon-server-2pe0.onrender.com/types`)
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

const handleSubmit = async (event) => {
    event.preventDefault();
    await createPokemon(userData);
    setUsedata({
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
};
 
  return (
    <div className={style.modalDiv}>
      <div className={style.containerForm}>
      <Link className={style.registerForm} to="/home" onClick={() => createPokemoData()}>Back</Link>
      <h1>Create Pokemon</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.containerFormValues} >
                <div className={style.containerRange}>
                    <label for="name">Name *</label>
                    <input className={style.inputForm}
                        type="text"
                        name="name" 
                        value={userData.name} 
                        onChange={handleChange}
                        placeholder='Enter your name' />
                </div>
                <p className={style.errorForm}>{errors.name ? errors.name : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label htmlFor="image">Image Url *</label>
                    <input className={style.inputForm}
                        type="text"
                        name="image" 
                        value={userData.image} 
                        onChange={handleChange}
                        placeholder='Enter image URL' />
                </div>
                <p className={style.errorForm}>{errors.image ? errors.image : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="hp">Health Points *</label>
                    <input id="hp" type="range" name="hp" onChange={handleChange} value={userData.hp} />
                    <label for="hp"><div className={style.dataRange} >&nbsp;{userData.hp}</div></label>
                </div>
                <p className={style.errorForm}>{errors.hp ? errors.hp : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="attack">Attack *</label>
                    <input type="range" name="attack" onChange={handleChange} value={userData.attack} />
                    <label for="attack"><div className={style.dataRange} >&nbsp;{userData.attack}</div></label>
                </div>
                <p className={style.errorForm}>{errors.attack ? errors.attack : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="defense">Defense *</label>
                    <input type="range" name="defense" onChange={handleChange} value={userData.defense}/>
                    <label for="defense"><div className={style.dataRange} >&nbsp;{userData.defense}</div></label>
                </div>
                <p className={style.errorForm}>{errors.defense ? errors.defense : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="speed">Speed </label>
                    <input type="range" name="speed" onChange={handleChange} value={userData.speed} />
                    <label for="speed"><div className={style.dataRange} >&nbsp;{userData.speed}</div></label>
                </div>
                <p className={style.errorForm}>{errors.speed ? errors.speed : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="height">Height </label>
                    <input type="range" name="height" onChange={handleChange} value={userData.height} />
                    <label for="height"><div className={style.dataRange} >&nbsp;{userData.height}</div></label>
                </div>
                <p className={style.errorForm}>{errors.height ? errors.height : <div className={style.space}>&nbsp;</div>}</p>
                <div className={style.containerRange}>
                    <label for="weight">Weight </label>
                    <input type="range" name="weight" onChange={handleChange} value={userData.weight} />
                    <label for="weight"><div className={style.dataRange} >&nbsp;{userData.weight}</div></label>
                </div>
                <p className={style.errorForm}>{errors.weight ? errors.weight : <div className={style.space}>&nbsp;</div>}</p>
            </div>
            <div className={style.selectType}>Select at least one type</div>
            <div className={style.containerType}>
                {typesData.types.map((type, index) => (
                    <div key={index} className={`${style.buttonType} ${style[`type-${type}`]} ${userData.types.includes(type) ? style.buttonTypeActive : ""}`} onClick={() => handleTypes(type)}>{type}</div>
                ))}
            </div>
            <div className={style.containerButton}>
                { !errors.name && !errors.image && !errors.hp && !errors.attack && !errors.defense && userData.types.length > 0
                ? <button className={style.buttonForm} type="submit">Submit</button>
                : <button className={style.buttonFormInactive} >Submit</button>
                }
            </div>
            <div> (*) Required</div>
          </form>
        </div>
    </div>
  );
};

export default CreatePokemon;