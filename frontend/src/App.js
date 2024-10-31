import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={fetchPosts}>Fetch Posts</button>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p><strong>Body:</strong> {post.body}</p>
                <p><strong>User ID:</strong> {post.userId}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
