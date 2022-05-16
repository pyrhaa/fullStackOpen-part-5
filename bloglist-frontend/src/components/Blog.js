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
    removeBlog(blog);
  };

  const FullBlogDetails = () => {
    return (
      <div>
        <p>{blog.url}</p>
        <div>
          <p>likes {blog.likes}</p>
          <button onClick={likeUp}>like up</button>
        </div>
        <p>{blog.author}</p>
      </div>
    );
  };

  return (
    <div style={blogStyle}>
      <div>{blog.title}</div>
      <ShowHide buttonLabel="view" ref={blogFullRef}>
        <FullBlogDetails />
      </ShowHide>
      <button onClick={deleted}>Remove</button>
    </div>
  );
};

export default Blog;
