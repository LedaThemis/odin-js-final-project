import styled from 'styled-components';

import TweetSection from './TweetSection';

const HomePageMiddle = () => {
  return (
    <StyledHomePageMiddle>
      <HomePageHeading>Home</HomePageHeading>
      <StyledTweetSection>
        <TweetSection />
      </StyledTweetSection>
    </StyledHomePageMiddle>
  );
};

const StyledHomePageMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px 0;
`;

const HomePageHeading = styled.h2`
  font-family: Roboto;
  font-size: 20px;
  padding-left: 16px;
  margin: 0;
`;

const StyledTweetSection = styled.div`
  border-bottom: 1px solid rgba(15, 20, 25, 0.1);
`;

export default HomePageMiddle;
