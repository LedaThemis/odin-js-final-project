import styled from 'styled-components';

import { useAuthValue } from '../AuthContext';

const SidebarProfile = ({ className }) => {
  const { currentUser } = useAuthValue();
  const { photoURL, displayName, uid } = currentUser;
  return (
    <StyledProfileArea className={className}>
      <img src={photoURL} alt="profile"></img>
      <StyledNameArea>
        <StyledUsername>{displayName}</StyledUsername>
        <StyledUID>{`@${uid}`}</StyledUID>
      </StyledNameArea>
    </StyledProfileArea>
  );
};

const StyledProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  border-radius: 9999px;

  cursor: pointer;

  &:hover {
    background-color: rgba(15, 20, 25, 0.2);
  }

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;

const StyledNameArea = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  p {
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const StyledUsername = styled.p`
  font-weight: bold;
`;

const StyledUID = styled.p`
  color: rgb(83, 100, 113);
`;

export default SidebarProfile;
