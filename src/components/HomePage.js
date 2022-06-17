import { useState } from 'react';
import styled from 'styled-components';

import '../styles/HomePage.css';

import { Navigate, Outlet } from 'react-router-dom';

import HomeSidebar from './HomeSidebar';
import HomePageRight from './HomePageRight';
import { useAuthValue } from '../AuthContext';
import SearchContext from './SearchContext';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('en');
  const SearchContextValue = { searchQuery, setSearchQuery };

  const { currentUser, isLoaded } = useAuthValue();

  return (
    <StyledHomePage>
      {isLoaded && !currentUser && <Navigate to="/login" />}
      {currentUser && (
        <StyledHomeSidebar>
          <HomeSidebar />
        </StyledHomeSidebar>
      )}
      {currentUser && (
        <SearchContext.Provider value={SearchContextValue}>
          <Outlet />
        </SearchContext.Provider>
      )}
      {currentUser && (
        <SearchContext.Provider value={SearchContextValue}>
          <HomePageRight />
        </SearchContext.Provider>
      )}
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr;
  grid-template-areas: '
    LEFT HEADER RIGHT
  ';
`;

const StyledHomeSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;

  border-right: 1px solid rgba(15, 20, 25, 0.1);
`;

export default HomePage;
