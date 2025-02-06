import React, { useState } from 'react';

function Post({ post, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate({
      ...post,
      content: editedContent.trim()
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={editedContent}
            onChange={event => setEditedContent(event.target.value)}
          />
          <button onClick={handleUpdate}>Enregistrer</button>
          <button onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
      ) : (
        <div>
          <p>{post.content}</p>
          <button onClick={handleDelete}>Supprimer</button>
          <button onClick={handleEdit}>Modifier</button>
        </div>
      )}
    </div>
  );
}

export default Post;
