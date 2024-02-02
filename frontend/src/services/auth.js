// services/auth.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend API URL

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { username, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signupUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
