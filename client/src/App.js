import Cards from './components/Cards/Cards';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser';
import Search from './components/Search/Search';
import Nav from './components/Nav/Nav';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import Error from './components/Error/Error';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { allCharacters, order, group, filter, source } from "./redux/Actions/actions";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://pokemon-server-2pe0.onrender.com/pokemons`)
      .then((results) => {
        dispatch(allCharacters({text:"", data:results.data}));
        dispatch(order(filterOrder));
      });
  }, []);

  
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const accessLogin = async (userData) => {
    const { email, password } = userData;
    try {
       const URL = 'https://pokemon-server-2pe0.onrender.com/user';
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
       const URL = 'https://pokemon-server-2pe0.onrender.com/user';
       const { data } = await axios.post(URL,userData);
       const { access } = data;
       access && window.alert("User created successfully");
    } catch (error) {
       window.alert(error.response.data.msg);
    }
  }

  const createPokemon = async (userData) => {
    try {
       const URL = 'https://pokemon-server-2pe0.onrender.com/pokemons';
       const { data } = await axios.post(URL,userData);
       const { access } = data;
       access && window.alert("Pokemon created successfully");
    } catch (error) {
       window.alert(error.response.data.msg);
    }
  }

  const createPokemoData = () => {
    axios
      .get(`https://pokemon-server-2pe0.onrender.com/pokemons`)
      .then((results) => {
        dispatch(allCharacters({text:"", data:results.data}));
        dispatch(order(filterOrder));
      });
  }
  
  useEffect(() => {
    createPokemoData();
  }, []);

let { filterTypes, filterOrder, filterSource }  = useSelector(state => state);

const onSearch = async ({type,text}) => {
    let URL= "";
    type === "name" && typeof text === "string" ? URL="https://pokemon-server-2pe0.onrender.com/pokemons?name=" : URL="https://pokemon-server-2pe0.onrender.com/pokemons/"
 
   try {
       const { data } = await axios(`${URL}${text}`)
       if (type === "name") {
          dispatch(allCharacters({text:text, data:data}));
          dispatch(source(filterSource));
          //dispatch(filter(filterTypes));
          dispatch(order(filterOrder));
       } else {
          dispatch(allCharacters({text:text, data:[data]}));
          dispatch(group("id"));
          dispatch(source(filterSource));
          //dispatch(filter(filterTypes));
          dispatch(order(filterOrder));
       }
      } catch (error) {
        window.alert(error.response.data.msg);
     }
 }

 const location = useLocation();
 const background = location.state && location.state.background;

  return (
    <div className='App'>
      <Nav logout={logout}/>
      <Routes location={background || location}>
        <Route path='/' element={<Login accessLogin={accessLogin}/>} />
        <Route path='/home' element={<><Cards onSearch={onSearch} /><Search onSearch={onSearch} /></>} />
        <Route path='/user' element={<CreateUser createUsers={createUsers}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      {location && (
      <Routes>
         <Route path='/pokemon' element={<CreatePokemon createPokemon={createPokemon} createPokemoData={createPokemoData} />} />
      </Routes>
      )}
    </div>
  );
}

export default App;
