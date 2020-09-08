import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './MovieCard';

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 16px 0 16px;
  min-height: 320px;
  max-height: 600px;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledEmptyState = styled.div`
  color: white;
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StyledMessage = styled.p`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`;

const ResultsList = ({
  results, handleNomination, nominatedIds, message,
}) => (
  <StyledSection>
    {message && <StyledMessage>{message}</StyledMessage>}
    {
        results.length > 0
          ? results.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              handleNomination={handleNomination}
              disabled={nominatedIds.has(movie.imdbID)}
            />
          ))
          : (
            <StyledEmptyState>
              <FontAwesomeIcon icon={faFilm} />
              <p>Search for your favorite movies above</p>
            </StyledEmptyState>
          )
      }
  </StyledSection>
);

export default ResultsList;
