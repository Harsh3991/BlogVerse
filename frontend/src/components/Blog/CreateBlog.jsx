import React, { useState } from 'react';
import axios from 'axios';
import './Blog.css';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      small_description: smallDescription,
      content,
      img,
      posted_by: 'user_id', // Replace 'user_id' with the actual user ID
    };

    try {
      const response = await axios.post('https://blogverse-n0e2.onrender.com/api/blogs', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Blog created:', response.data);
      // Redirect to blog list or detail page
    } catch (error) {
      console.error('Error creating blog:', error);
      setError('Failed to create blog');
    }
  };

  return (
    <div className="create-blog">
      <h2>Create New Blog</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="smallDescription">Small Description:</label>
          <input
            type="text"
            id="smallDescription"
            value={smallDescription}
            onChange={(e) => setSmallDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;