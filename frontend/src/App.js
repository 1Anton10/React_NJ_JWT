import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (data) => {
    localStorage.setItem('token', data.token);
    setToken(data.token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>User Authentication</h1>
          {token && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </header>
        
        <Routes>
          <Route 
            path="/login" 
            element={token ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={token ? <Navigate to="/" /> : <Register onRegister={handleLogin} />} 
          />
          <Route 
            path="/" 
            element={
              token ? (
                <div className="welcome-message">
                  <h2>Welcome!</h2>
                  <p>You are successfully authenticated.</p>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;