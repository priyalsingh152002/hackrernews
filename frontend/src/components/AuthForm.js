// AuthForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../services/auth';
import './AuthForm.css'; // Import CSS file for styling

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error('Please enter both username and password');
        return;
      }

      await loginUser(username, password);
      history.push('/news');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async () => {
    try {
      if (!username || !password) {
        console.error('Please enter both username and password');
        return;
      }

      await signupUser(username, password);
      history.push('/signup');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="auth-form">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      <button onClick={handleLogin} className="login-button">Login</button>
      <button onClick={handleSignup} className="signup-button">Signup</button>
    </div>
  );
}

export default AuthForm;
