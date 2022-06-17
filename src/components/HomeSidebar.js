import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuthValue } from '../AuthContext';
import SidebarButton from './SidebarButton';
import TweetButton from './TweetButton';

import HomeButtonIcon from '../assets/sidebar/HomeButtonIcon';
import ExploreButtonIcon from '../assets/sidebar/ExploreButtonIcon';
import NotificationsButtonIcon from '../assets/sidebar/NotificationsButtonIcon';
import MessagesButtonIcon from '../assets/sidebar/MessagesButtonIcon';
import ProfileButtonIcon from '../assets/sidebar/ProfileButtonIcon';
import SettingsButtonIcon from '../assets/sidebar/SettingsButtonIcon';
import TwitterLogo from '../assets/TwitterLogo';
import SidebarProfile from './SidebarProfile';

const HomeSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoaded } = useAuthValue();

  const getIsSelected = (key) => key === location.pathname;

  return (
    <StyledSidebar>
      <StyledSidebarButtons>
        <SidebarTwitterLogo size={2} />
        <SidebarButton
          isSelected={getIsSelected('/home')}
          Icon={<HomeButtonIcon size={1.75} isSelected={getIsSelected('/home')} />}
          text="Home"
          onClick={() => navigate('.')}
        />
        <SidebarButton
          isSelected={getIsSelected('/home/explore')}
          Icon={<ExploreButtonIcon size={1.75} isSelected={getIsSelected('/home/explore')} />}
          text="Explore"
          onClick={() => navigate('explore')}
        />
        <SidebarButton
          isSelected={getIsSelected('/home/notifications')}
          Icon={<NotificationsButtonIcon size={1.75} isSelected={getIsSelected('/home/notifications')} />}
          text="Notifications"
          onClick={() => navigate('notifications')}
        />
        <SidebarButton
          isSelected={getIsSelected('/home/messages')}
          Icon={<MessagesButtonIcon size={1.75} isSelected={getIsSelected('/home/messages')} />}
          text="Messages"
          onClick={() => navigate('messages')}
        />
        <SidebarButton
          isSelected={getIsSelected('/home/profile')}
          Icon={<ProfileButtonIcon size={1.75} isSelected={getIsSelected('/home/profile')} />}
          text="Profile"
          onClick={() => navigate('profile')}
        />
        <SidebarButton
          isSelected={getIsSelected('/home/settings')}
          Icon={<SettingsButtonIcon size={1.75} isSelected={getIsSelected('/home/settings')} />}
          text="Settings"
          onClick={() => navigate('settings')}
        />
        <StyledTweetButton onClick={() => navigate('tweet')} />
      </StyledSidebarButtons>
      {isLoaded && <StyledSidebarProfile />}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 275px;
  padding: 0px 12px;
`;

const StyledSidebarButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 275px;

  align-items: flex-start;
`;

const SidebarTwitterLogo = styled(TwitterLogo)`
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  padding: 12px;

  border-radius: 9999px;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`;

const StyledTweetButton = styled(TweetButton)`
  width: 225px;
`;

const StyledSidebarProfile = styled(SidebarProfile)`
  margin-bottom: 10px;
`;

export default HomeSidebar;
