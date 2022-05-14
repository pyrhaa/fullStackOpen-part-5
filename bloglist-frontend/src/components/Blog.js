import React, { useRef } from 'react';
import ShowHide from './ShowHide';

const Blog = ({ blog }) => {
  const blogFullRef = useRef();

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  const FullBlogDetails = () => {
    return (
      <div>
        <p>{blog.url}</p>
        <div>
          <p>likes {blog.likes}</p>
          <button>like up</button>
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
    </div>
  );
};

export default Blog;
