import { useContext } from 'react';
import styled from 'styled-components';

import FeedTweet from './FeedTweet';
import { useCurrentTweets } from '../firebase';
import SearchContext from './SearchContext';

const TweetsFeed = () => {
  const { currentTweets } = useCurrentTweets();
  const { searchQuery } = useContext(SearchContext);

  return (
    <StyledTweetsFeed>
      {currentTweets &&
        currentTweets
          .filter((tweet) => tweet.text.includes(searchQuery))
          .map((tweet) => (
            <FeedTweet
              key={tweet.id}
              tweetID={tweet.id}
              uid={tweet.author_uid}
              displayName={tweet.author_name}
              photoURL={tweet.photoURL}
              timestamp={tweet.timestamp}
              text={tweet.text}
            ></FeedTweet>
          ))}
    </StyledTweetsFeed>
  );
};

const StyledTweetsFeed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TweetsFeed;
