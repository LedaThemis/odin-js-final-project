import styled from 'styled-components';

import FeedTweet from './FeedTweet';
import { useCurrentTweets } from '../firebase';

const TweetsFeed = () => {
  const { currentTweets } = useCurrentTweets();

  return (
    <StyledTweetsFeed>
      {currentTweets &&
        currentTweets.map((tweet) => (
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
