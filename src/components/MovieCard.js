import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled.div`
  position: relative;
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

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  font-size: 25px;
  color: white;
`;

const StyledText = styled.p`
  margin: 0.5rem;
  font-size: ${props => props.title ? '20px' : '15px'};
  text-align: center;
  color: white;
`

const MovieCard = ({ movie, nominateMovie }) => {
  return (
    <StyledCard url={movie.Poster}>
      <StyledIcon icon={faAward} onClick={() => nominateMovie(movie)}/>
      <StyledText title>{movie.Title}</StyledText>
      <StyledText>{movie.Year}</StyledText>
    </StyledCard>
  );
}
 
export default MovieCard;