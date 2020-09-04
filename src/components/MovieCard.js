import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { cardWidth, gutter } from '../lib';

const StyledCard = styled.div`
  position: relative;
  height: 150px;
  width: ${cardWidth}px;
  background: ${props => `linear-gradient(to bottom, transparent 0%, black 100%), url(${props.url})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 2px;
  margin: 5px ${gutter}px;
  transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
  :hover {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  };
  opacity: ${props => props.disabled ? '0.5' : '1'};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  top: -15px;
  right: -15px;
  margin: 10px;
  font-size: 25px;
  color: ${props => props.nominated ? '#ffd43b' : 'white'};
`;

const StyledText = styled.p`
  margin: 0.5rem;
  font-size: ${props => props.title ? '18px' : '13px'};
  text-align: center;
  color: white;
`

const MovieCard = ({ movie, handleNomination, nominated, disabled }) => {
  return (
    <StyledCard url={movie.Poster} nominated={nominated} disabled={disabled} >
      <StyledIcon icon={faAward} onClick={() => handleNomination(movie, nominated)} nominated={nominated} />
      <StyledText title={true}>{movie.Title}</StyledText>
      <StyledText>{movie.Year}</StyledText>
    </StyledCard>
  );
}
 
export default MovieCard;