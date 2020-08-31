import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  height: 223px;
  width: 150px;
  background: ${props => `linear-gradient(to bottom, transparent 0%, black 100%), url(${props.url})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 2px;
  margin: 5px;
  transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  }
`;

const StyledTitle = styled.p`
  margin: 0.5rem;
  font-size: 20px;
  text-align: center;
  color: white;
`

const StyledYear = styled.p`
  margin: 0.5rem;
  font-size: 15px;
  text-align: center;
  color: white;
`

const MovieCard = ({ movie, nominateMovie }) => {
  return (
    <StyledCard onClick={() => nominateMovie(movie)} url={movie.Poster}>
      {/* <StyledOverlay> */}
        {/* <img src={movie.Poster} alt={movie.Title}/> */}
      {/* </StyledOverlay> */}
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledYear>{movie.Year}</StyledYear>
    </StyledCard>
  );
}
 
export default MovieCard;