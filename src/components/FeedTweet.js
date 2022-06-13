import styled from 'styled-components';

import { useAuthValue } from '../AuthContext';

const FeedTweet = () => {
  const { currentUser } = useAuthValue();

  const { photoURL, displayName, uid } = currentUser;

  return (
    <StyledFeedTweet>
      <StyledProfileImage src={photoURL} alt="profile"></StyledProfileImage>
      <StyledSection>
        <StyledProfileArea>
          <StyledProfileName>{displayName}</StyledProfileName>
          <StyledUID>@{uid}</StyledUID>
        </StyledProfileArea>
        <StyledTweetText>
          Leda is <br></br>Leda is someone who eats food<br></br>Food is<br></br>Great!!!
        </StyledTweetText>
      </StyledSection>
    </StyledFeedTweet>
  );
};

const StyledFeedTweet = styled.div`
  display: flex;
  gap: 10px;

  padding: 10px 0;
  padding-left: 16px;

  border-top: 1px solid rgba(15, 20, 25, 0.1);
  border-bottom: 1px solid rgba(15, 20, 25, 0.1);

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const StyledSection = styled.div`
  width: 100%;
`;

const StyledProfileArea = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  p {
    margin: 0;
  }
`;

const StyledProfileImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const StyledProfileName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const StyledUID = styled.p`
  color: rgb(83, 100, 113);
`;

const StyledTweetText = styled.p`
  width: 100%;
  height: 100%;

  font-family: Roboto, sans-serif;

  margin: 0;
  padding: 5px 0;
`;

export default FeedTweet;
