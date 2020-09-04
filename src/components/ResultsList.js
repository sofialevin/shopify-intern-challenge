import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  min-height: 320px;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const StyledEmptyState = styled.div`
  color: white;
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledMessage = styled.p`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`

const ResultsList = ({ results, handleNomination, nominatedIds, message }) => {
  return (
    <StyledSection>
      {message && <StyledMessage>{message}</StyledMessage>}
      {
        results.length > 0
        ? results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} handleNomination={handleNomination} nominated={nominatedIds.has(movie.imdbID)} disabled={nominatedIds.has(movie.imdbID)} />)
        : <StyledEmptyState>
          <FontAwesomeIcon icon={faFilm} />
          <p>Search for your favorite movies above</p></StyledEmptyState>
      }
    </StyledSection>
  );
}
 
export default ResultsList;