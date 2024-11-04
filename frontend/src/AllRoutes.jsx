// src/AllRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import CreateBlog from './components/Blog/CreateBlog';
import BlogList from './components/Blog/BlogList';

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;