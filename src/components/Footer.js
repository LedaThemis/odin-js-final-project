import FooterLink from './FooterLink';

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <div id="footer">
        <div id="footer--links">
          <FooterLink name="About" url="https://about.twitter.com" />
          <FooterLink name="Help Center" url="https://help.twitter.com" />
          <FooterLink name="Terms of Service" url="https://twitter.com/tos" />
          <FooterLink name="Privacy Policy" url="https://twitter.com/privacy" />
          <FooterLink name="Cookie Policy" url="https://support.twitter.com/articles/20170514" />
          <FooterLink name="Accessibility" url="https://help.twitter.com/resources/accessibility" />
          <FooterLink
            name="Ads Info"
            url="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html"
          />
          <FooterLink name="Blog" url="https://blog.twitter.com" />
          <FooterLink name="Status" url="https://status.twitterstat.us" />
          <FooterLink name="Careers" url="https://careers.twitter.com" />
          <FooterLink name="Brand Resources" url="https://about.twitter.com/press/brand-assets" />
          <FooterLink name="Advertising" url="https://ads.twitter.com" />
          <FooterLink name="Marketing" url="https://marketing.twitter.com/" />
          <FooterLink name="Twitter for Business" url="https://business.twitter.com" />
          <FooterLink name="Developers" url="https://developer.twitter.com" />
          <FooterLink name="Directory" url="https://twitter.com/i/directory/profiles" />
          <FooterLink name="Settings" url="https://twitter.com/settings" />
        </div>
        <p id="copyright-text">© 2022 Twitter, Inc.</p>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  #footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-family: IBM Plex Sans, sans-serif;
    margin: 1rem;
  }

  #footer--links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  #copyright-text {
    margin: 0;
    color: rgb(83, 100, 113);
    font-size: 0.8rem;
  }
`;

export default Footer;
