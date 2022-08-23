import React from "react";

import "./Movie.css";
import "./Movie_mobile.css";
const Movie = ({ Movies }) => {
  return (
    <div className="movie">
      <img className="moviePic" src={Movies.Poster} alt={Movies.Title} />

      <div className="movieDetails">
        <h3>{Movies.Title}</h3>
        <h4>{Movies.Year}</h4>
      </div>
    </div>
  );
};

export default Movie;
