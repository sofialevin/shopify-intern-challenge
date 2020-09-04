import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MediumGray, omdb } from '../lib';
import useDebounce from '../hooks/useDebounce';

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
  padding: 0.8rem;
  padding-left: 3rem;
`;

const Search = ({ addResults }) => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 500);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // if debouncedSearch term exists, user has not typed in the last 500ms
    if (debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}&r=json`;

      setSearching(true);
      axios.get(searchUrl)
        .then((res) => {
          if (res.data.Response === 'True') {
            addResults(res.data.Search);
          } else {
            setMessage(res.data.Error);
            addResults([]);
          }
          setSearching(false);
        })
        .catch(() => {
          setMessage('An unexpected error occured.')
          setSearching(false);
        });
    }
    // Only call effect if debounced search term or current page changes
  }, [debouncedSearchTerm, addResults]);

  const changeQuery = (value) => {
    setMessage(null);
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
      {message && <p>{message}</p>}
    </section>
   
  );
}
 
export default Search;