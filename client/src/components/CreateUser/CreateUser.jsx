import React from 'react'
import style from './CreateUser.module.css';
import validation from '../../validation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import banner from '../../img/bannerPokemon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faEyeSlash, faEye, faBell } from '@fortawesome/free-solid-svg-icons';

const CreateUser = ({createUsers}) => {
  const [showPass, setShowpass] = useState(false);

  const [userData,setUsedata] = useState({
      name:"",
      email:"",
      password:"",
  });

  const [errors,setErrors] = useState({
      name:"",
      email:"",
      password:"",
  });

  const handleChange = (event) => {
      setErrors(validation({...userData,[event.target.name]:event.target.value}));
      setUsedata({...userData,[event.target.name]:event.target.value});  
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      createUsers(userData);  
  };

  return (
      <>
      <div className={style.container} >
      <Link className={style.registerForm} to="/">Back</Link>  
        <div className={style.containerLogin}>
          <img src={banner} alt='Pokemon' />
          <div className={style.containerForm}>
          <form onSubmit={handleSubmit}>
            <h2>Name</h2>
            <input className={style.inputForm}
                  type="text"
                  name="name" 
                  value={userData.name} 
                  onChange={handleChange}
                  placeholder='Enter your name' />
            <p className={style.errorForm}>{errors.name && <div><FontAwesomeIcon icon={faBell} beatFade />  {errors.name}</div>}</p>
            <h2>Email</h2>
            <input className={style.inputForm}
                  type="text"
                  name="email" 
                  value={userData.email} 
                  onChange={handleChange}
                  placeholder='Enter your email' />
            <p className={style.errorForm}>{errors.email && <div><FontAwesomeIcon icon={faBell} beatFade />  {errors.email}</div>}</p>
            <h2>Password</h2>
            <div className={style.inputeyeForm}>
              <input className={style.inputForm}
                    type={showPass ? "text" : "password"} 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange}
                    placeholder='Enter your password' />
              <div className={style.eyeForm} onClick={() => setShowpass(!showPass)}>
                {showPass ? <div><FontAwesomeIcon icon={faEyeSlash} /></div> : <div><FontAwesomeIcon icon={faEye} /></div> }
              </div>
            </div>      
            <p className={style.errorForm}>{errors.password && <div><FontAwesomeIcon icon={faBell} beatFade /> {errors.password}</div>}</p>
            <button className={style.buttonForm} type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
          </form>
        </div>
        <div className={style.descritionForm}><p>¡ Congratulations !<br />You are one click away from becoming a pokemon master</p></div>
        </div>
      </div>
      </>
  );
}

export default CreateUser;