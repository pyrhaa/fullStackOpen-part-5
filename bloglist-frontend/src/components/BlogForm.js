import React, { useState } from 'react';

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });

  const addBlog = async (e) => {
    e.preventDefault();
    const blogObj = {
      title: newBlog.title,
      author: newBlog.author,
      url: newBlog.url
    };
    try {
      const creaBlog = await blogService.create(blogObj);
      setBlogs(blogs.concat(creaBlog));
      setMessage(true);
      setNotif(`A new blog <<${newBlog.title}>> by ${newBlog.author} added`);
      setTimeout(() => {
        setMessage(null);
        setNewBlog({ title: '', author: '', url: '' });
        setNotif('');
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={addBlog}>
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
