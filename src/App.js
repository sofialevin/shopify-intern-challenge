import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { maxAppWidth, gutter } from './lib';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import NominatedList from './components/NominatedList';
import Notification from './components/Notification';

const AppContainer = styled.div`
  border: 3px solid #b6a644;
  margin: 20px 40px;
  height: calc(100vh - 46px);
  display: flex;
  /* flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
  @media (min-width: 768px) {
    /* justify-content: center; */
  }
  @media (min-width: 768px) and (max-height: 520px) {
    /* justify-content: flex-start; */
  }
  &:after {
    content: "";
    margin: 20px;
    border: 3px solid #b6a644;
    display: block;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 20px;
  }
`;

const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  z-index: 2;
  margin-top: 20px;
`;

const StyledH1 = styled.h1`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`;

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [nominationSlots, setNominationSlots] = useState(5);

  const addResults = useCallback((results) => setResults(results), []);

  const handleNomination = (movie, nominated) => {
    if (nominated) {
      setNominations(nominations.filter((nomination) => nomination.imdbID !== movie.imdbID))
    } else if (nominations.length < 5) {
      setNominations([...nominations, movie])
    }
  }

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  }, [nominations])

  return (
    <AppContainer>
      <Main>
        {showNotification ? <Notification /> : null}
        <StyledH1>The Shoppies</StyledH1>
        <Search addResults={addResults} />
        <ResultsList handleNomination={handleNomination} results={results} nominatedIds={new Set(nominations.map((nomination) => nomination.imdbID))}/>
        <NominatedList nominations={nominations} handleNomination={handleNomination} nominationSlots={nominationSlots} />
      </Main>
    </AppContainer>
  );
}

export default App;
