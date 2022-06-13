import { useState } from 'react';
import styled from 'styled-components';

import { useAuthValue } from '../AuthContext';
import TweetButton from './TweetButton';

const TweetSection = () => {
  const { currentUser } = useAuthValue();
  const [tweetText, setTweetText] = useState('');

  return (
    <StyledTweetSection>
      <img src={currentUser.photoURL} alt="profile"></img>
      <StyledSection>
        <StyledTweetTextArea
          placeholder="What's happening?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
        <StyledTweetButton disabled={tweetText === ''} />
      </StyledSection>
    </StyledTweetSection>
  );
};

const StyledTweetSection = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  padding-left: 16px;
  padding-bottom: 10px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTweetTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: fit-content;
  border: none;
  overflow: hidden;

  padding: 20px 0;

  font-size: 1.25rem;
  font-family: Roboto, sans-serif;
  transform: scale(1, 0.95);
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

const StyledTweetButton = styled(TweetButton)`
  align-self: flex-end;

  padding: 0 16px;

  p {
    margin: 9px 0px;
    font-size: 15px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: rgb(29, 155, 240);
    }
  }
`;

export default TweetSection;
