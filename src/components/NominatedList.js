import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledH2 = styled.h2`
  font-family: 'Poiret One', cursive;
  color: white;
`

const NominatedList = ({ nominations, handleNomination }) => {
  return (
    <section>
      <StyledH2>Nominated Movies</StyledH2>
      <StyledDiv>
        {
          nominations.map((movie) => <MovieCard key={movie.imdbID} movie={movie} handleNomination={handleNomination} nominated/>)
        }
      </StyledDiv>
    </section>
  );
}
 
export default NominatedList;