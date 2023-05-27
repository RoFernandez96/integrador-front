import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Forms from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


function App() {
  const Location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  const URL = 'http://localhost:3001/rickandmorty/login';
  
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await  axios(`${URL}?email=${email}&password=${password}`)
      const { access } = data;
      
      setAccess(access);
      access && navigate('/home');
      
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        };
      } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      {
        Location.pathname !== "/" && <NavBar onSearch={onSearch} /> 
      }
      
      <Routes>
        <Route path='/' element={<Forms login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>} />  
      </Routes>
      
    </div>
  );
}

export default App;
