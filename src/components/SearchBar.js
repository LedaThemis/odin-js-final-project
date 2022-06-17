import { useContext } from 'react';
import styled from 'styled-components';

import SearchBarIcon from '../assets/SearchBarIcon';
import SearchContext from './SearchContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <StyledSearchBar>
      <StyledSearchBarIcon />
      <StyledSearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Twitter"
      />
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(239, 243, 244);

  border-radius: 9999px;
`;

const StyledSearchInput = styled.input`
  border: none;
  background-color: inherit;
  padding: 12px;
  font-size: 15px;

  border-radius: 9999px;

  font-family: Roboto, sans-serif;

  &:focus {
    outline: none;
  }
`;

const StyledSearchBarIcon = styled(SearchBarIcon)`
  svg {
    padding-left: 12px;
    fill: rgb(83, 100, 113);
    width: 32px;
    height: 18px;
  }
`;

export default SearchBar;
