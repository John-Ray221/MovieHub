import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MovieDetails.css";
import "./MovieDetails_Mobile.css";

const MovieDetails = () => {
  const [Movie, setMovie] = useState({});
  const URL = "https://www.omdbapi.com/?apikey=8d267aea&";
  const IMDbID = useParams();

  useEffect(() => {
    FetchMovie(IMDbID.id);
    console.log(Movie);
  }, []);

  const FetchMovie = async (id) => {
    const response = await fetch(`${URL}i=${id}`);
    const results = await response.json();

    console.log(results);
    setMovie(results);
  };
  return (
    <div class="content">
      <div className="showcase">
        <img src={Movie.Poster} alt={Movie.Title} />
      </div>

      <div className="container">
        <div className="headerSection">
          <div className="Poster">
            <img src={Movie.Poster} alt={Movie.Title} />
          </div>

          <div className="movieData">
            <div className="title">
              <h1>{Movie.Title}</h1>
            </div>

            <div class="genre">
              <h2>
                Genre: <span className="genre-names">{Movie.Genre}</span>
              </h2>
            </div>

            <div className="summary">
              <h2>Summary:</h2>
              <br />
              <p className="summary-text">{Movie.Plot}</p>
            </div>

            <div class="genre">
              <h2>
                Actors:{" "}
                <span>
                  {Movie.Actors}
                  <br />
                  <br />
                  <span className="genre-names">{Movie.Rated}</span>
                </span>
              </h2>
            </div>
          </div>

          <div className="metascoreRating">
            <div className="rating">
              <div>
                <h4>Metascore</h4>
              </div>
              <div>
                <h1>{Movie.Metascore}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
