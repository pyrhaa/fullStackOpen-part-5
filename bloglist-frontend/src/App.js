import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Notification from './components/Notification';
import BlogForm from './components/BlogForm';
import Togglable from './components/Togglable';
import blogService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const [message, setMessage] = useState(null);
  const [notif, setNotif] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchblogs = async () => {
      const data = await blogService.getAll();
      if (data) {
        setBlogs(data);
      }
    };
    fetchblogs();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const addBlog = () => {};

  const handleLog = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (err) {
      setMessage(false);
      setNotif('wrong username or password');
      console.log(err);
      setTimeout(() => {
        setMessage(null);
        setNotif('');
      }, 5000);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.reload(false);
  };

  if (user === null) {
    return (
      <div>
        <Notification res={message} text={notif} />
        <h2>log in to application</h2>
        <form onSubmit={handleLog}>
          <div>
            username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification res={message} text={notif} />
      <div>
        {user.name} logged-in <button onClick={logout}>logout</button>
      </div>
      <h2>create new</h2>
      <Togglable buttonLabel="Blog Form">
        <BlogForm
          handleTitleChange={({ target }) =>
            setNewBlog({ ...newBlog, title: target.value })
          }
          handleAuthorChange={({ target }) =>
            setNewBlog({ ...newBlog, author: target.value })
          }
          handleUrlChange={({ target }) =>
            setNewBlog({ ...newBlog, url: target.value })
          }
          newBlog={newBlog}
        />
      </Togglable>

      <ul>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default App;
