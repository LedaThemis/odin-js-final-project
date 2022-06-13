import styled from 'styled-components';

import FeedTweet from './FeedTweet';

const TweetsFeed = () => {
  // TODO
  return (
    <StyledTweetsFeed>
      <FeedTweet />
      <FeedTweet />
      <FeedTweet />
    </StyledTweetsFeed>
  );
};

const StyledTweetsFeed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TweetsFeed;
