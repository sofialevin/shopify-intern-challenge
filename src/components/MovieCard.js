import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { gutter } from '../lib';

const CardWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  margin: 5px ${gutter}px;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  @media (max-width: 750px) {
    width: 140px;
    height: 210px;
    margin: 5px 0;
  }
  :before {
    content: '';
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    z-index: 1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  cursor: ${(props) => (props.disabled || props.fullNominations ? 'default' : 'pointer')};
  top: 2%;
  right: 2%;
  font-size: 30px;
  z-index: 3;
  color: ${(props) => (props.isNominated ? '#ffd43b' : 'white')};
  padding: 0;
  filter: drop-shadow(16px 16px 10px black);
`;

const StyledText = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  z-index: 2;
  p {
    word-break: break-word;
  }
`;

const StyledTitle = styled.p`
  margin: 0.2rem;
  font-size: 18px;
  text-align: center;
  color: white;
`;

const StyledYear = styled.p`
  margin: 0.5rem;
  font-size: 13px;
  text-align: center;
  color: white;
`;

const MovieCard = ({
  movie, handleNomination, isNominated, disabled, fullNominations,
}) => (
  <CardWrapper disabled={disabled}>
    {movie.Poster !== 'N/A' ? <StyledImage src={movie.Poster} /> : null}
    <StyledButton type="button" fullNominations={fullNominations} disabled={disabled} isNominated={isNominated} onClick={() => handleNomination(movie, isNominated)}>
      <FontAwesomeIcon icon={faAward} />
    </StyledButton>
    <StyledText>
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledYear>{movie.Year}</StyledYear>
    </StyledText>
  </CardWrapper>
);

export default MovieCard;
