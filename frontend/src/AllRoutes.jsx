import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import CreateBlog from './components/Blog/CreateBlog';
import Home from './components/Blog/Home.jsx';

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;