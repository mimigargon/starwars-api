import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios(
          "https://starwars-server.vercel.app/characters"
        );
        setCharacters(res.data.data.characters);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getCharacters();
  }, []);

  const navigateToCharacter = (character) => {
    navigate(`/characters/${character.id}`, {state: character});
  }

  return (
    <>
      <h1>Personajes</h1>
      <div className="character_container">
        {characters.map((character) => {
          return (
            <div className="charater" key={character.id}>
              <img
                className="character_image"
                src={character.image}
                alt={character.name}
                onClick={() => navigateToCharacter(character)}
              />
              <div>
                ID: {character.id} <strong>{character.name}</strong>
              </div>
              <div>
                Origin: <strong>{character.origin}</strong>
              </div>
              <div>
                Role: <strong>{character.role}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
