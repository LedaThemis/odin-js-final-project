import styled from 'styled-components';

import SearchBar from './SearchBar';

const HomePageRight = () => {
  return <StyledHomePageRight><SearchBar /></StyledHomePageRight>;
};

const StyledHomePageRight = styled.div`
  padding-top: 12px;
  padding-left: 20px;

  display: flex;
  border-left: 1px solid rgba(15, 20, 25, 0.1);
  align-items: flex-start;
`;

export default HomePageRight;
