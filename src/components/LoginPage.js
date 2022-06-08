import { useAuthValue } from '../AuthContext';

import styled from 'styled-components';

import Footer from './Footer';

import TwitterLogo from '../assets/TwitterLogo';
import GoogleLogo from '../assets/GoogleLogo';
import LoginPageBackground from '../assets/login_page_background.png';
import '../styles/LoginPage.css';

import { signIn } from '../firebase';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { currentUser } = useAuthValue();

  return (
    <LoginPageStyle>
      {currentUser && <Navigate to="/" />}
      <div id="login-page--container">
        <div id="login-page--main">
          <div id="login-page--background"></div>
          <div id="login-page-login-area">
            <TwitterLogo size={3} />
            <h1>Happening now</h1>
            <h3>Join Twitter today.</h3>
            <StyledGoogleSignInButton className="button" onClick={() => signIn()}>
              <GoogleLogo size={1.25} />
              <p>Sign in with Google</p>
            </StyledGoogleSignInButton>
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

const StyledGoogleSignInButton = styled.button`
  padding: 0.25rem 3rem;

  border: 1px solid rgb(207, 217, 222);
  border-radius: 1rem;

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'IBM Plex Sans';
  }
`;

export default LoginPage;
