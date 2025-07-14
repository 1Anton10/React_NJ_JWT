import React from 'react';
import AuthForm from './AuthForm';
import { useNavigate } from 'react-router';
import { register } from '../services/authService';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();

  const handleRegister = async (credentials) => {
    const token = await register(credentials);
    console.log(token)
    onRegister(token);
  };

  return (
    <AuthForm
      title="Register"
      onSubmit={handleRegister}
      submitText="Sign Up"
      secondaryAction={() => navigate('/login')}
      secondaryText="Already have an account? Login"
    />
  );
};

export default Register;