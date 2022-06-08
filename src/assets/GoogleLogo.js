import styled from 'styled-components';

const Color = styled.svg`
  color: rgb(15, 20, 25);
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
`;

const GoogleLogo = ({ size }) => {
  return (
    <Color size={size}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z"
            fill="#EA4335"
          ></path>
          <path
            d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z"
            fill="#FBBC05"
          ></path>
          <path
            d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z"
            fill="#34A853"
          ></path>
          <path
            d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z"
            fill="#4285F4"
          ></path>
        </g>
      </svg>
    </Color>
  );
};

export default GoogleLogo;
