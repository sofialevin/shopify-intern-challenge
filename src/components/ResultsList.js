import React from 'react';
import MovieCard from './MovieCard';

const ResultsList = ({ results }) => {
  return (
    <section>
      {
        results.length > 0
        ? results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        : null
      }
    </section>
  );
}
 
export default ResultsList;