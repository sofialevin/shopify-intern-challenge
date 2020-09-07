import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { maxAppWidth, gutter, Amber } from './lib';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import NominatedList from './components/NominatedList';
import Notification from './components/Notification';

const AppContainer = styled.div`
  border: 3px solid ${Amber};
  margin: 20px 40px;
  height: 100%;
  display: flex;
  @media (max-width: 750px) {
    text-align: center
  }
  @media (min-width: 768px) and (max-height: 520px) {
    /* justify-content: flex-start; */
  }
  /* &:after {
    content: "";
    margin: 20px;
    border: 3px solid ${Amber};
    display: block;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 20px;
    height: 100%;
  }
  @media (max-width: 750px) {
    text-align: center
  } */
`;

const AppContainer2 = styled.div`
    margin: 20px;
    border: 3px solid ${Amber};
    width: calc(100% + 60px);
    height: 100%;
    margin-left: -30px;
    margin-right: -30px;
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
  const [message, setMessage] = useState(null);

  const handleResults = useCallback((results) => setResults(results), []);

  const handleMessage = useCallback((message) => setMessage(message), []);

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
      <AppContainer2>
      <Main>
        {showNotification ? <Notification /> : null}
        <StyledH1>The Shoppies</StyledH1>
        <Search handleResults={handleResults} handleMessage={handleMessage} />
        <ResultsList handleNomination={handleNomination} results={results} nominatedIds={new Set(nominations.map((nomination) => nomination.imdbID))} message={message}/>
        <NominatedList nominations={nominations} handleNomination={handleNomination} />
      </Main>
      </AppContainer2>
    </AppContainer>
  );
}

export default App;
