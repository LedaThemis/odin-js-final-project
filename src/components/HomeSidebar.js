import { useState } from 'react';
import styled from 'styled-components';

import SidebarButton from './SidebarButton';

import HomeButtonIcon from '../assets/sidebar/HomeButtonIcon';
import ExploreButtonIcon from '../assets/sidebar/ExploreButtonIcon';
import NotificationsButtonIcon from '../assets/sidebar/NotificationsButtonIcon';
import MessagesButtonIcon from '../assets/sidebar/MessagesButtonIcon';
import ProfileButtonIcon from '../assets/sidebar/ProfileButtonIcon';
import SettingsButtonIcon from '../assets/sidebar/SettingsButtonIcon';
import TwitterLogo from '../assets/TwitterLogo';

const HomeSidebar = () => {
  const [currentButtonSelected, setCurrentButtonSelected] = useState('');

  return (
    <StyledSidebar>
      <SidebarTwitterLogo size={2} />
      <SidebarButton
        Icon={<HomeButtonIcon size={1.75} isSelected={currentButtonSelected === 'Home'} />}
        text="Home"
        onClick={() => setCurrentButtonSelected('Home')}
      />
      <SidebarButton
        Icon={<ExploreButtonIcon size={1.75} isSelected={currentButtonSelected === 'Explore'} />}
        text="Explore"
        onClick={() => setCurrentButtonSelected('Explore')}
      />
      <SidebarButton
        Icon={<NotificationsButtonIcon size={1.75} isSelected={currentButtonSelected === 'Notifications'} />}
        text="Notifications"
        onClick={() => setCurrentButtonSelected('Notifications')}
      />
      <SidebarButton
        Icon={<MessagesButtonIcon size={1.75} isSelected={currentButtonSelected === 'Messages'} />}
        text="Messages"
        onClick={() => setCurrentButtonSelected('Messages')}
      />
      <SidebarButton
        Icon={<ProfileButtonIcon size={1.75} isSelected={currentButtonSelected === 'Profile'} />}
        text="Profile"
        onClick={() => setCurrentButtonSelected('Profile')}
      />
      <SidebarButton
        Icon={<SettingsButtonIcon size={1.75} isSelected={currentButtonSelected === 'Settings'} />}
        text="Settings"
        onClick={() => setCurrentButtonSelected('Settings')}
      />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
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
