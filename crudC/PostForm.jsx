import React, { useState } from 'react';

function PostForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() !== '') {
      onAdd({
        id: Date.now(), 
        content: content.trim()
      });
      setContent(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default PostForm;
