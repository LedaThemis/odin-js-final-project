import styled from 'styled-components';

const FooterLink = ({ name, url }) => {
  return (
    <LinkStyle>
      <div>
        <a id="link" href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
    </LinkStyle>
  );
};

const LinkStyle = styled.div`
  a {
    color: rgb(83, 100, 113);
    text-decoration: none;
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;

export default FooterLink;
