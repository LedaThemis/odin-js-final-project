import '../styles/HomePage.css';

import { Navigate } from 'react-router-dom';

import { useAuthValue } from '../AuthContext';

const HomePage = () => {
  const { currentUser, isLoaded } = useAuthValue();

  return (
    <div className="App">
      {isLoaded && !currentUser && <Navigate to="/login" />}
      {/* TODO: ADD HOME UI */}
      Home
    </div>
  );
};

export default HomePage;
