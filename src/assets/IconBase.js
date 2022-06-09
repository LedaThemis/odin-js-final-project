import styled from 'styled-components';

const StyledIconBase = styled.div`
  width: ${(props) => props.Size}rem;
  height: ${(props) => props.Size}rem;

  display: flex;
`;


const IconBase = ({ size, svg, ...props }) => {
  return <StyledIconBase Size={size} {...props}>{svg}</StyledIconBase>;
};

export default IconBase;
