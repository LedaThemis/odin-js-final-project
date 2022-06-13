import styled from 'styled-components';

const ButtonBase = ({ Icon, text, onClick, className, ...props }) => {
  return (
    <StyledButtonBase onClick={onClick} className={className} {...props}>
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
