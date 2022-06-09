import { useState } from 'react';

import SidebarButton from './SidebarButton';

import HomeButtonIcon from '../assets/sidebar/HomeButtonIcon';
import ExploreButtonIcon from '../assets/sidebar/ExploreButtonIcon';
import NotificationsButtonIcon from '../assets/sidebar/NotificationsButtonIcon';
import MessagesButtonIcon from '../assets/sidebar/MessagesButtonIcon';
import ProfileButtonIcon from '../assets/sidebar/ProfileButtonIcon';
import SettingsButtonIcon from '../assets/sidebar/SettingsButtonIcon';

const HomeSidebar = () => {
  const [currentButtonSelected, setCurrentButtonSelected] = useState('');

  return (
    <div>
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
    </div>
  );
};

export default HomeSidebar;
