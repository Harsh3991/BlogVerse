import React from 'react';
import BlogList from './BlogList';
import './Blog.css';

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Website Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <BlogList />
    </div>
  );
}

export default Home;