import styled from 'styled-components';

import Footer from './Footer.js';

import TwitterLogo from '../assets/TwitterLogo.js';
import LoginPageBackground from '../assets/login_page_background.png';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <LoginPageStyle>
      <div id="login-page--container">
        <div id="login-page--main">
          <div id="login-page--background"></div>
          <div id="login-page-login-area">
            <TwitterLogo size={3} />
            <h1>Happening now</h1>
            <h3>Join Twitter today.</h3>
          </div>
        </div>

        <Footer />
      </div>
    </LoginPageStyle>
  );
};

const LoginPageStyle = styled.div`
  #login-page--container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    justify-content: space-between;

    font-family: IBM Plex Sans, sans-serif;
  }

  #login-page--main {
    display: flex;
    flex-direction: row-reverse;

    background-image: url(${LoginPageBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    flex: 1 1 auto;
  }

  #login-page-background {
    flex-shrink: 0;
  }

  #login-page-login-area {
    padding: 3rem 2rem 0 2rem;
    min-width: 45vw;
    height: 100%;
    background-color: white;
  }

  #login-page--background {
    height: 100%;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  h3 {
    font-size: 2rem;
  }

  h1,
  h3 {
    transform: scale(1, 0.8);
  }
`;

export default LoginPage;
