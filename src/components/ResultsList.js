import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const ResultsList = ({ results, nominateMovie }) => {
  return (
    <StyledSection>
      {
        results.length > 0
        ? results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} nominateMovie={nominateMovie} />)
        : null
      }
    </StyledSection>
  );
}
 
export default ResultsList;