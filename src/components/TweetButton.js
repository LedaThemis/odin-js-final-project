import styled from 'styled-components';
import ButtonBase from './ButtonBase';

const TweetButton = ({className}) => {
  return <StyledTweetButton className={className} text="Tweet"></StyledTweetButton>;
};

const StyledTweetButton = styled(ButtonBase)`
  &:hover {
    background-color: rgb(26, 140, 216);
  }

  background-color: rgb(29, 155, 240);
  border-radius: 9999px;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  p {
    color: white;
    font-weight: bold;
  }
`;

export default TweetButton;
