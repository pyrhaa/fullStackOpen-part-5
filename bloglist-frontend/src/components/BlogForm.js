import React, { useState } from 'react';

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });

  const addBlog = (e) => {
    e.preventDefault();
    createBlog({
      title: newBlog.title,
      author: newBlog.author,
      url: newBlog.url
    });
    setNewBlog({ title: '', author: '', url: '' });
  };

  return (
    <form className="form" onSubmit={addBlog}>
      <div>
        title:
        <input
          className="titleInput"
          type="text"
          name="Title"
          value={newBlog.title}
          onChange={({ target }) =>
            setNewBlog({ ...newBlog, title: target.value })
          }
        />
      </div>
      <div>
        author:
        <input
          className="authorInput"
          type="text"
          name="Author"
          value={newBlog.author}
          onChange={({ target }) =>
            setNewBlog({ ...newBlog, author: target.value })
          }
        />
      </div>
      <div>
        url:
        <input
          className="urlInput"
          type="text"
          name="Url"
          value={newBlog.url}
          onChange={({ target }) =>
            setNewBlog({ ...newBlog, url: target.value })
          }
        />
      </div>
      <button className="submitBtn" type="submit">
        create
      </button>
    </form>
  );
};

export default BlogForm;
