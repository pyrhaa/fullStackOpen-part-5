import React from 'react';

const BlogForm = ({
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  onSubmit,
  newBlog
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        title:
        <input
          type="text"
          name="Title"
          value={newBlog.title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        author:
        <input
          type="text"
          name="Author"
          value={newBlog.author}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        url:
        <input
          type="text"
          name="Url"
          value={newBlog.url}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default BlogForm;
