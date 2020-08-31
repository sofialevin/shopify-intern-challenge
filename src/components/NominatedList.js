import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const NominatedList = ({ nominations }) => {
  return (
    <section>
      <h2>Nominated Movies</h2>
      <StyledDiv>
        {
          nominations.map((movie) => <MovieCard key={movie.imdbID} movie={movie}>Test</MovieCard>)
        }
      </StyledDiv>
    </section>
  );
}
 
export default NominatedList;