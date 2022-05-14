import React, { useState, useRef } from 'react';
import ShowHide from './ShowHide';

const Blog = ({ blog }) => {
  const [showAll, setShowAll] = useState(false);

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
      </div>
    );
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author} <button>view</button>
      </div>
      <ShowHide buttonLabel="view" ref={blogFullRef}>
        <FullBlogDetails />
      </ShowHide>
    </div>
  );
};

export default Blog;
