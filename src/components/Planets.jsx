import { useEffect, useState } from "react";
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const res = await axios("https://starwars-server.vercel.app/planets");
        console.log(res);
        setPlanets(res.data.data.planets);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getPlanets();
  }, []);

  return (
    <>
      <h1>Planetas</h1>
      <div className="planets___container">
        {planets.map((planet) => {
          return (
            <div className="planets" key={planet.id}>
              <img
                className="planets__image"
                src={planet.image}
                alt={planet.name}
              />
              <div>
                ID: {planet.id} - <strong>{planet.name}</strong>
              </div>
              <div>
                Suns: <strong>{planet.suns}</strong>
              </div>
              <div>
                Region: <strong>{planet.region}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Planets;
