import styled from 'styled-components';

const ButtonBase = ({ Icon, text, onClick }) => {
  return (
    <StyledButtonBase onClick={onClick}>
      {Icon}
      <StyledParagraph>{text}</StyledParagraph>
    </StyledButtonBase>
  );
};

const StyledButtonBase = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
`;

export default ButtonBase;
