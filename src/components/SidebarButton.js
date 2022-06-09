import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const SidebarButton = (props) => {
  return <StyledSidebarButton {...props} />;
};

const StyledSidebarButton = styled(ButtonBase)`
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    transform: scale(1, 0.95);
    margin: 0 16px 0 20px;
    font-weight: 400;
  }
  padding: 12px;

  display: flex;
  align-items: center;

  border-radius: 9999px;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`;

export default SidebarButton;
