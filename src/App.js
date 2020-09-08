import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { maxAppWidth, gutter, Amber } from './lib';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import NominatedList from './components/NominatedList';
import Notification from './components/Notification';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  @media (max-width: 750px) {
    padding: 10px;
  }
`;

const BorderContainer = styled.div`
  flex-grow: 1;
  border: 3px solid ${Amber};
  margin: 0 20px;
  display: flex;
  @media (max-width: 750px) {
    text-align: center
  }
`;

const InnerBorderContainer = styled.div`
  border: 3px solid ${Amber};
  width: calc(100% + 46px);
  margin: 17px -23px;
  padding: 0 20px;
`;

const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
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

  const handleResults = useCallback((res) => setResults(res), []);

  const handleMessage = useCallback((res) => setMessage(res), []);

  const handleNomination = (movie, isNominated) => {
    if (isNominated) {
      setNominations(nominations.filter((nomination) => nomination.imdbID !== movie.imdbID));
    } else if (nominations.length < 5) {
      setNominations([...nominations, movie]);
    }
  };

  const closeModal = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true);
    }
  }, [nominations]);

  return (
    <AppContainer>
      <BorderContainer>
        <InnerBorderContainer>
          <Main>
            {showNotification ? <Notification closeModal={closeModal} /> : null}
            <StyledH1>The Shoppies</StyledH1>
            <Search handleResults={handleResults} handleMessage={handleMessage} />
            <ResultsList
              handleNomination={handleNomination}
              results={results}
              nominatedIds={new Set(nominations.map((nomination) => nomination.imdbID))}
              message={message}
              fullNominations={nominations.length === 5}
            />
            <NominatedList nominations={nominations} handleNomination={handleNomination} />
          </Main>
        </InnerBorderContainer>
      </BorderContainer>
    </AppContainer>
  );
}

export default App;
