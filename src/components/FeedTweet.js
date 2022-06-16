import { useState } from 'react';
import styled from 'styled-components';
import { BsTrash, BsThreeDots } from 'react-icons/bs';

import defaultAvatar from '../assets/default-avatar.jpg';
import { useAuthValue } from '../AuthContext';
import { removeTweet } from '../firebase';

const FeedTweet = ({ uid, displayName, photoURL, text, tweetID }) => {
  const [currentThreeDotsColor, setCurrentThreeDotsColor] = useState('rgb(83, 100, 113)');
  const [isContextMenuShown, setIsContextMenuShown] = useState(false);
  const { currentUser } = useAuthValue();

  const imageExists = (url) => {
    fetch(url)
      .then((_) => true)
      .catch((_) => false);
  };

  return (
    <StyledFeedTweet data-id={tweetID}>
      <StyledProfileImage
        src={imageExists(photoURL) ? photoURL : defaultAvatar}
        alt="profile"
        onerror={(e) => (e.target.src = defaultAvatar)}
      ></StyledProfileImage>
      <StyledSection>
        <StyledTopSection>
          <StyledProfileArea>
            <StyledProfileName>{displayName}</StyledProfileName>
            <StyledUID>@{uid}</StyledUID>
          </StyledProfileArea>
          {currentUser.uid === uid && (
            <StyledContextMenuButton
              onMouseEnter={() => setCurrentThreeDotsColor('rgb(29, 155, 240)')}
              onMouseLeave={() => setCurrentThreeDotsColor('rgb(83, 100, 113)')}
              onClick={() => setIsContextMenuShown((prevState) => !prevState)}
            >
              <BsThreeDots size={'1.5em'} color={currentThreeDotsColor} />
              {isContextMenuShown && (
                <StyledContextMenu>
                  <StyledRemoveButton onClick={() => removeTweet(tweetID)}>
                    <BsTrash size={'1.5em'} style={{ fill: 'red' }} />
                    <p>Delete</p>
                  </StyledRemoveButton>
                </StyledContextMenu>
              )}
            </StyledContextMenuButton>
          )}
        </StyledTopSection>
        <StyledTweetText>{text}</StyledTweetText>
      </StyledSection>
    </StyledFeedTweet>
  );
};

const StyledFeedTweet = styled.div`
  display: flex;
  gap: 10px;

  padding: 10px 16px;

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

const StyledTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledContextMenuButton = styled.button`
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  background-color: transparent;
  border: none;
  padding: 8px;
  margin: -8px;
  border-radius: 9999px;
  cursor: pointer;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`;

const StyledContextMenu = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  border-radius: 4px;

  transform: translateX(-160px);
`;

const StyledRemoveButton = styled.button`
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  display: flex;
  align-items: center;
  gap: 10px;

  width: 200px;

  p {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    transform: scale(1, 0.95);
    margin: 0;
  }

  background-color: transparent;
  border: none;
  padding: 8px 8px;
  cursor: pointer;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`;

const StyledTweetText = styled.p`
  width: 100%;
  height: 100%;

  font-family: Roboto, sans-serif;

  white-space: pre-wrap;

  margin: 0;
  padding: 5px 0;
`;

export default FeedTweet;
