import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './components/LoginPage';

const RouterSwitch = () => {
  return (
    <BrowserRouter basename="/odin-final-project">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
