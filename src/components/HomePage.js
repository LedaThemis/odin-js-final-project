import '../styles/HomePage.css';

import { Navigate } from 'react-router-dom';

import { useAuthValue } from '../AuthContext';

const HomePage = () => {
  const { currentUser } = useAuthValue();

  return (
    <div className="App">
      {!currentUser && <Navigate to="/login" />}
      {/* TODO: ADD HOME UI */}
      Home
    </div>
  );
};

export default HomePage;
