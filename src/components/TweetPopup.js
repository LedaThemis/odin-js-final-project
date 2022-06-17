import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TweetSection from './TweetSection';
import ClosePopupIcon from '../assets/ClosePopupIcon';

const TweetPopup = () => {
  const navigate = useNavigate();

  return (
    <StyledTweetPopup>
      <StyledTweetSectionContainer>
        <StyledPopupTop>
          <StyledClosePopupIcon size={1.25} onClick={() => navigate(-1)} />
        </StyledPopupTop>
        <TweetSection />
      </StyledTweetSectionContainer>
    </StyledTweetPopup>
  );
};

const StyledTweetPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledTweetSectionContainer = styled.div`
  position: absolute;
  background-color: white;
  height: fit-content;
  top: 5%;

  border-radius: 16px;
`;

const StyledPopupTop = styled.div`
  padding: 10px 9px 0 9px;
  width: 600px;
`;

const StyledClosePopupIcon = styled(ClosePopupIcon)`
  cursor: pointer;

  border-radius: 9999px;

  padding: 7px;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  svg {
    fill: rgb(15, 20, 25);
    box-sizing: content-box;
  }
`;

export default TweetPopup;
