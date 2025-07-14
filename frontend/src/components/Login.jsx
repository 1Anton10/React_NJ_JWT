import React from 'react';
import AuthForm from './AuthForm';
import { useNavigate } from 'react-router';
import { login } from '../services/authService';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const token = await login(credentials);
    onLogin(token);
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleLogin}
      submitText="Sign In"
      secondaryAction={() => navigate('/register')}
      secondaryText="Need an account? Register"
    />
  );
};

export default Login;