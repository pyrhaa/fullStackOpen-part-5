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
      likes: 10000000000
    };

    component = render(
      <Blog blog={blog} removeBlog={mockHandler} upBlog={mockHandler} />
    );
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

    const details = component.container.querySelector('.blogDetails');
    expect(details).toBeDefined();
  });

  test('hide button closes details', () => {
    const button = screen.getByText('view');
    userEvent.click(button);

    const closeButton = screen.getByText('hide');
    userEvent.click(closeButton);

    const details = component.container.querySelector('.showContent');
    expect(details).toHaveStyle('display: none');
  });
});
