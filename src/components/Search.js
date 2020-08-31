import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MediumGray } from '../lib';

const StyledSearchWrapper = styled.div`
  display: flex;
  border: 1px solid ${MediumGray};
  background-color: white;
  align-items: center;
  font-size: 1.5rem;
  position: relative;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 1rem;
  color: ${MediumGray};
`;

const StyledSearch = styled.input`
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${MediumGray};
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
`;

const Search = () => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');

  const changeQuery = (value) => {
    setQuery(value);
  };

  return (
    <StyledSearchWrapper>
      <StyledIcon icon={searching ? faSpinner : faSearch} spin={searching} />
        <StyledSearch
          type="text"
          name="query"
          placeholder="Search"
          value={query}
          onChange={(e) => changeQuery(e.target.value)}
        />
      </StyledSearchWrapper>
  );
}
 
export default Search;