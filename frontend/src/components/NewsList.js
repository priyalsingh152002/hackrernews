// NewsList.js
import React, { useEffect, useState } from 'react';
import { getNews } from '../services/news';
import NewsItem from './NewsItem';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../LoginButton.css'; // Import the CSS file for login button styling

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const news = await getNews();
      setNewsList(news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="news-list">
      {/* Place the login button at the top */}
      <Link to="/login" className="login-button">Login</Link>
      {newsList.map((news) => (
        <NewsItem key={news.id} news={news} />
      ))}
    </div>
  );
}

export default NewsList;
