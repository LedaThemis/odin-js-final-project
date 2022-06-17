import { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TweetPopup from './components/TweetPopup';
import HomePageMiddle from './components/HomePageMiddle';
import NotFound from './components/NotFound';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoaded(true);
    });

    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <BrowserRouter basename="/odin-final-project">
      <AuthProvider value={{ currentUser, isLoaded }}>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />}>
            <Route index element={<HomePageMiddle />} />
            <Route
              path="tweet"
              element={
                <div>
                  <div style={{ width: '100%' }} />
                  <TweetPopup />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <h3>This page is still under construction.</h3>
                </main>
              }
            />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
