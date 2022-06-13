import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios("https://starwars-server.vercel.app/movies");
        setMovies(res.data.data.movies);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Películas</h1>
      <div className="movies___container">
        {movies.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <img
                className="movie___poster"
                src={movie.poster}
                alt={movie.name}
              />
              <div>
                NUMBER: {movie.number} - <strong>{movie.name}</strong>
              </div>
              <div>
                Crawl: <strong>{movie.crawl}</strong>
              </div>
              <div>
                Trailer: <strong>{movie.trailer}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
