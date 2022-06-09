import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const SidebarButton = (props) => {
  return <StyledSidebarButton {...props} />;
};

const StyledSidebarButton = styled(ButtonBase)`
  &&:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

export default SidebarButton;
