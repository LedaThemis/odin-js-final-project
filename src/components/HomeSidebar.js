import { useState } from 'react';
import styled from 'styled-components';

import SidebarButton from './SidebarButton';
import TweetButton from './TweetButton';

import HomeButtonIcon from '../assets/sidebar/HomeButtonIcon';
import ExploreButtonIcon from '../assets/sidebar/ExploreButtonIcon';
import NotificationsButtonIcon from '../assets/sidebar/NotificationsButtonIcon';
import MessagesButtonIcon from '../assets/sidebar/MessagesButtonIcon';
import ProfileButtonIcon from '../assets/sidebar/ProfileButtonIcon';
import SettingsButtonIcon from '../assets/sidebar/SettingsButtonIcon';
import TwitterLogo from '../assets/TwitterLogo';

const HomeSidebar = () => {
  const [currentButtonSelected, setCurrentButtonSelected] = useState('');

  const getIsSelected = (key) => key === currentButtonSelected;

  return (
    <StyledSidebar>
      <SidebarTwitterLogo size={2} />
      <SidebarButton
        isSelected={getIsSelected('Home')}
        Icon={<HomeButtonIcon size={1.75} isSelected={getIsSelected('Home')} />}
        text="Home"
        onClick={() => setCurrentButtonSelected('Home')}
      />
      <SidebarButton
        isSelected={getIsSelected('Explore')}
        Icon={<ExploreButtonIcon size={1.75} isSelected={getIsSelected('Explore')} />}
        text="Explore"
        onClick={() => setCurrentButtonSelected('Explore')}
      />
      <SidebarButton
        isSelected={getIsSelected('Notifications')}
        Icon={<NotificationsButtonIcon size={1.75} isSelected={getIsSelected('Notifications')} />}
        text="Notifications"
        onClick={() => setCurrentButtonSelected('Notifications')}
      />
      <SidebarButton
        isSelected={getIsSelected('Messages')}
        Icon={<MessagesButtonIcon size={1.75} isSelected={getIsSelected('Messages')} />}
        text="Messages"
        onClick={() => setCurrentButtonSelected('Messages')}
      />
      <SidebarButton
        isSelected={getIsSelected('Profile')}
        Icon={<ProfileButtonIcon size={1.75} isSelected={getIsSelected('Profile')} />}
        text="Profile"
        onClick={() => setCurrentButtonSelected('Profile')}
      />
      <SidebarButton
        isSelected={getIsSelected('Settings')}
        Icon={<SettingsButtonIcon size={1.75} isSelected={getIsSelected('Settings')} />}
        text="Settings"
        onClick={() => setCurrentButtonSelected('Settings')}
      />
      <TweetButton />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarTwitterLogo = styled(TwitterLogo)`
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  padding: 12px;

  display: flex;
  align-items: center;

  border-radius: 9999px;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`;

export default HomeSidebar;
