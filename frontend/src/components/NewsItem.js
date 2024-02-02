// NewsItem.js
import React from 'react';
import { markAsRead, deleteItem } from '../services/news';
import './NewsItem.css'; // Import CSS file for styling

function NewsItem({ news }) {
  const handleMarkAsRead = async () => {
    try {
      await markAsRead(news.id);
      // Update UI or fetch news again
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteItem(news.id);
      // Update UI or fetch news again
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    
    <div className="news-item">
      <a href={news.url}>{news.title}</a>
      <button onClick={handleMarkAsRead}>Mark as Read</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NewsItem;
