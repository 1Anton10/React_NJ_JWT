import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AuthForm = ({ title, onSubmit, submitText, secondaryAction, secondaryText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await onSubmit({ email, password });
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{title}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email-help"
          />
          <small id="email-help">We'll never share your email.</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete={title === 'Login' ? 'current-password' : 'new-password'}
            required
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : submitText}
        </button>
      </form>
      
      <button 
        onClick={secondaryAction}
        className="secondary-action"
      >
        {secondaryText}
      </button>
    </div>
  );
};

export default AuthForm;