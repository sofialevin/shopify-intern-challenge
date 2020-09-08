import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MediumGray, omdb, gutter } from '../lib';
import useDebounce from '../hooks/useDebounce';

const StyledSearchWrapper = styled.div`
  display: flex;
  border: 1px solid ${MediumGray};
  background-color: white;
  align-items: center;
  font-size: 1.5rem;
  position: relative;
  margin: 0 ${gutter}px;
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
  padding: 0.8rem;
  padding-left: 3rem;
`;

const Search = ({ handleResults, handleMessage }) => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(() => {
    // if debouncedSearch term exists, user has not typed in the last 500ms
    if (debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}&type=movie&r=json`;

      setSearching(true);
      axios.get(searchUrl)
        .then((res) => {
          if (res.data.Response === 'True') {
            handleResults(res.data.Search);
          } else {
            handleMessage(res.data.Error);
            handleResults([]);
          }
          setSearching(false);
        })
        .catch(() => {
          handleMessage('An unexpected error occured.');
          setSearching(false);
        });
    }
    // Only call effect if debounced search term or current page changes
  }, [debouncedSearchTerm, handleResults, handleMessage]);

  const changeQuery = (value) => {
    handleMessage(null);
    setQuery(value);
  };

  return (
    <section>
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
    </section>
  );
};

export default Search;
