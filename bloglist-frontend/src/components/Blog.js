import React, { useRef } from 'react';
import ShowHide from './ShowHide';

const Blog = ({ blog, upBlog, removeBlog }) => {
  const blogFullRef = useRef();

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  const likeUp = (e) => {
    e.preventDefault();
    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1
    };
    upBlog(updatedBlog);
  };

  const deleted = (e) => {
    e.preventDefault();
    if (window.confirm(`Delete ${blog.title}`)) {
      removeBlog(blog.id);
    }
  };

  const FullBlogDetails = () => {
    return (
      <div>
        <p>{blog.url}</p>
        <div>
          <p>likes {blog.likes}</p>
          <button onClick={likeUp}>like up</button>
        </div>
      </div>
    );
  };

  return (
    <div style={blogStyle}>
      <p className="blogTitle">{blog.title}</p>
      <p className="blogAuthor">by {blog.author}</p>
      <ShowHide className="showHide" buttonLabel="view" ref={blogFullRef}>
        <FullBlogDetails className="blogDetails" />
      </ShowHide>
      <button onClick={deleted}>Remove</button>
    </div>
  );
};

export default Blog;
