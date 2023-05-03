import Cards from './components/Cards/Cards';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser';
import Search from './components/Search/Search';
import Nav from './components/Nav/Nav';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const accessLogin = async (userData) => {
    const { email, password } = userData;
    try {
       const URL = 'http://localhost:3001/user';
       const { data } = await axios(URL + `?email=${email}&password=${password}`);
       const { access } = data;
       setSuccess(access);
       access && navigate('/home');
    } catch (error) {
       window.alert(error.response.data.msg);
    }
  }

  const logout = () => {
    setSuccess(false);
    navigate('/');
  }
 
  useEffect(() => {
    !success && navigate('/');
  }, [success]);

  const createUsers = async (userData) => {
    try {
       const URL = 'http://localhost:3001/user';
       const { data } = await axios.post(URL,userData);
       const { access } = data;
       access && window.alert("User created successfully");
    } catch (error) {
       window.alert(error.response.data.msg);
    }
  }

  const [characters, setCharacters] = useState([]);
  const [selection, setSelection] = useState("1");

  const onSearch = async ({text,type}) => {
    let URL= "";
    setSelection(type);
    type === "1" ? URL="http://localhost:3001/pokemons?name=" : URL="http://localhost:3001/pokemons/"
 
   try {
       const { data } = await axios(`${URL}${text}`)
       if (type === "1") {
          setCharacters([]);
          setCharacters((characters) => [...characters, ...data]);
       } else {
          setCharacters([]);
          setCharacters((characters) => [characters = data]);
       }
      } catch (error) {
        window.alert(error.response.data.msg);
     }
 }
  
  return (
    <div className='App'>
      <Nav logout={logout}/>
      <Routes>
        <Route path='/' element={<Login accessLogin={accessLogin}/>} />
        <Route path='/home' element={<><Cards characters={characters} selection={selection} onSearch={onSearch} /><Search onSearch={onSearch} /></>} />
        <Route path='/user' element={<CreateUser createUsers={createUsers}/>} />
      </Routes>
    </div>
  );
}

export default App;
