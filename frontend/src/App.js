// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import NewsList from './components/NewsList';
import './LoginButton.css'; // Import the CSS file for login button styling

function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/" element={<NewsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
