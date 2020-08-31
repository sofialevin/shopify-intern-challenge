import React from 'react';

const MovieCard = ({ movie, nominateMovie }) => {
  return (
    <div onClick={() => nominateMovie(movie)}>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
 
export default MovieCard;