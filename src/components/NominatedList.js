import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { cardWidth, gutter, MediumBlue, nominationSlots } from '../lib';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledH2 = styled.h2`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`

const StyledEmptySlot = styled.div`
  height: 150px;
  width: ${cardWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${MediumBlue};
  margin: 5px ${gutter}px;
  border-radius: 2px;
  font-size: 40px;
  font-family: 'Poiret One', cursive;
`

const NominatedList = ({ nominations, handleNomination }) => {
  return (
    <section>
      <StyledH2>Nominated Movies</StyledH2>
      <StyledDiv>
        {
          nominations.map((movie) => <MovieCard key={movie.imdbID} movie={movie} handleNomination={handleNomination} nominated/>)
        }
        {
          [...Array(nominationSlots - nominations.length)].map((e, i) => <StyledEmptySlot key={i}>{i + nominations.length + 1}</StyledEmptySlot>)
        }
      </StyledDiv>
    </section>
  );
}
 
export default NominatedList;