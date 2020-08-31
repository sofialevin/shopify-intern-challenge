import React, { useState } from 'react';
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

  const addResults = (results) => {
    setResults(results)
  }

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie])
  }

  const unNominateMovie = (id) => {
    setNominations(nominations.filter((movie) => movie.id !== id))
  }

  return (
    <AppContainer>
      <Main>
        <Search addResults={addResults} />
        <ResultsList nominateMovie={nominateMovie} results={results}/>
        <NominatedList nominations={nominations} unNominateMovie={unNominateMovie} />
      </Main>
    </AppContainer>
  );
}

export default App;
