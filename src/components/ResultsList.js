import React from 'react';
import MovieCard from './MovieCard';

const ResultsList = ({ results, nominateMovie }) => {
  return (
    <section>
      {
        results.length > 0
        ? results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} nominateMovie={nominateMovie} />)
        : null
      }
    </section>
  );
}
 
export default ResultsList;