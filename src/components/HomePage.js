import styled from 'styled-components';

import '../styles/HomePage.css';

import { Navigate } from 'react-router-dom';

import HomeSidebar from './HomeSidebar';
import { useAuthValue } from '../AuthContext';

const HomePage = () => {
  const { currentUser, isLoaded } = useAuthValue();

  return (
    <StyledHomePage>
      {isLoaded && !currentUser && <Navigate to="/login" />}
      {/* TODO: ADD HOME UI */}
      <StyledHomeSidebar>
        <HomeSidebar />
      </StyledHomeSidebar>
      <HomePageHeading>Home</HomePageHeading>
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
