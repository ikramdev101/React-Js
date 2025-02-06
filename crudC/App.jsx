import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    ));
  };

  return (
    <div>
      <h1>Liste de Posts</h1>
      <PostForm onAdd={addPost} />
      <div>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            onDelete={deletePost}
            onUpdate={updatePost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
