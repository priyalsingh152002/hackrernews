// services/news.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend API URL

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news`);
    return response.data
   
  } catch (error) {
    throw error.response.data;
  }
};

export const markAsRead = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
