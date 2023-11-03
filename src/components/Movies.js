import React from "react";
import { movies } from "../data";

function Movies() {
  return (
     <div>
        <h1>Movies page</h1>
      {movies.map(movie => {
        return(
        <ul>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres: </p>
          <ul>
            {movie.genres.map(genre => {
              return <li>{genre}</li>;
              
            })}
          </ul>
          <p>Time: {movie.time}</p>
        </ul>
        );
      })}

  </div>
  )
}

export default Movies;
