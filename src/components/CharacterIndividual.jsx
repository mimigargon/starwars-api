import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const CharacterIndividual = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [character, setCharacter] = useState(location.state);

  return (
    <div className="character" key={character.id}>
      <img
        className="character_image"
        src={character.image}
        alt={character.name}
      />
      <div>
        ID: {character.id} - <strong>{character.name}</strong>
      </div>
      <div>
        Origin: <strong>{character.origin}</strong>
      </div>
      <div>
        Role: <strong>{character.role}</strong>
      </div>
      <div>
        <h1 onClick={() => navigate(-1)}>Volver atrás</h1>
        <Link to="/characters">Volver atrás</Link>
      </div>
    </div>
  );
};

export default CharacterIndividual;
