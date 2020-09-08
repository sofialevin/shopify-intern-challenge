import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { maxAppWidth, gutter, Amber } from './lib';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import NominatedList from './components/NominatedList';
import Notification from './components/Notification';

const AppContainer = styled.div`
  border: 3px solid ${Amber};
  margin: 0 20px;
  display: flex;
  @media (max-width: 750px) {
    text-align: center
  }
`;

const InnerAppContainer = styled.div`
    border: 3px solid ${Amber};
    width: calc(100% + 46px);
    margin: 17px -23px;
    padding: 10px 20px;
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

  const closeModal = () => {
    setShowNotification(false);
  }

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true);
    }
  }, [nominations])

  return (
    <AppContainer>
      <InnerAppContainer>
        <Main>
          {showNotification ? <Notification closeModal={closeModal} /> : null}
          <StyledH1>The Shoppies</StyledH1>
          <Search handleResults={handleResults} handleMessage={handleMessage} />
          <ResultsList handleNomination={handleNomination} results={results} nominatedIds={new Set(nominations.map((nomination) => nomination.imdbID))} message={message}/>
          <NominatedList nominations={nominations} handleNomination={handleNomination} />
        </Main>
      </InnerAppContainer>
    </AppContainer>
  );
}

export default App;
