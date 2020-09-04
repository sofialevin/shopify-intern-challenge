import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { maxAppWidth, LightGray } from './lib';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import NominatedList from './components/NominatedList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${LightGray};
`;

const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const addResults = useCallback((results) => setResults(results), []);


  const handleNomination = (movie, nominated) => {
    if (nominated) {
      setNominations(nominations.filter((nomination) => nomination.imdbID !== movie.imdbID))
    } else if (nominations.length < 5) {
      setNominations([...nominations, movie])
    }
  }

  return (
    <AppContainer>
      <Main>
        <Search addResults={addResults} />
        <ResultsList handleNomination={handleNomination} results={results} nominatedIds={new Set(nominations.map((nomination) => nomination.imdbID))}/>
        <NominatedList nominations={nominations} handleNomination={handleNomination} />
      </Main>
    </AppContainer>
  );
}

export default App;
