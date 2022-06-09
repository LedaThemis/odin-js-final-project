import styled from 'styled-components';

const StyledIconBase = styled.svg`
  width: ${(props) => props.Size}rem;
  height: ${(props) => props.Size}rem;
`;


const IconBase = ({ size, path }) => {
  return <StyledIconBase viewBox='0 0 24 24' Size={size}>{path}</StyledIconBase>;
};

export default IconBase;
