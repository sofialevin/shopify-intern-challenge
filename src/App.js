import React from 'react';
import styled from 'styled-components';
import { maxAppWidth, LightGray } from './lib';
import Search from './components/Search';

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
  return (
    <AppContainer>
      <Main>
        <Search />
      </Main>
    </AppContainer>
  );
}

export default App;
