import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { authenticateUser } from ''; 
import Home from "./components/Home";
import Characters from "./components/Characters";
import Movies from "./components/Movies";
import Planets from "./components/Planets";
import CharacterIndividual from "./components/CharacterIndividual";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const loginUser = user => {
    const userLogged = authenticateUser(user);
    setUser(userLogged);

    if(userLogged) navigate('/');
  }
  return (
    <div className="App">
      <h1>Star Wars App</h1>
      {user?.name && <h2>Bienvendie de nuevo {user.name}</h2>}
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/characters">
        <button>Personajes</button>
      </Link>
      <Link to="/movies">
        <button>Películas</button>
      </Link>
      <Link to="/planets">
        <button>Planetas</button>
      </Link>
      {!user && <Link to='/login'>
        <button>Login</button>
      </Link>}
      {user && <button onClick={() => setUser(false)}>Logout</button>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login loginUser={loginUser}/>}/>
        <Route path="/characters" element={<Characters />} />
        <Route path='/characters/:id' element={<CharacterIndividual/>}/>
        <Route path="/movies" element={<PrivateRoute user={user} component={<Movies/>}/>} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
};

export default App;
