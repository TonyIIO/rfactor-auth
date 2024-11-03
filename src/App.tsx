import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './AuthForm';
import Header from './Header';
import AboutUs from './AboutUs';
import './App.css';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/auth" element={<AuthForm onLogin={handleLogin} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<AuthForm onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
