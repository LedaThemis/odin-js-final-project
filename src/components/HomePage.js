import '../styles/HomePage.css';

import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App">
      {!getAuth().currentUser && <Navigate to="/login" />}
      {/* TODO: ADD HOME UI */}
      Home
    </div>
  );
};

export default HomePage;
