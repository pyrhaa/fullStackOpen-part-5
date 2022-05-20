import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('<Blog />', () => {
  let component;

  const mockHandler = jest.fn();

  beforeEach(() => {
    const blog = {
      title: 'Tamazgha: the real north Africa',
      author: 'Yan Amazigh',
      url: 'www.tamaz.tm',
      likes: 100
    };

    component = render(<Blog blog={blog} upBlog={mockHandler} />);
  });

  test('render title & author, not url & likes', () => {
    const title = component.container.querySelector('.blogTitle');
    const author = component.container.querySelector('.blogAuthor');
    expect(title).toBeDefined();
    expect(author).toBeDefined();

    const details = component.container.querySelector('.showContent');
    expect(details).toHaveStyle('display: none');
  });

  test('shows blog details on click button', () => {
    const button = screen.getByText('view');
    userEvent.click(button);

    const details = component.container.querySelector('.blog');
    expect(details).toBeDefined();
    expect(details).not.toHaveStyle('display: none');
  });

  test('hide button closes details', () => {
    const button = screen.getByText('view');
    userEvent.click(button);

    const closeButton = screen.getByText('hide');
    userEvent.click(closeButton);

    const details = component.container.querySelector('.showContent');
    expect(details).toHaveStyle('display: none');
  });

  test('calls the handler likes twice when double cliked', () => {
    const viewButton = screen.getByText('view');
    userEvent.click(viewButton);

    expect(viewButton).toHaveBeenCalledTimes(1);

    const likesButton = screen.getByText('like');
    userEvent.click(likesButton);

    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
