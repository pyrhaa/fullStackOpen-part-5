import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('<Blog />', () => {
  let container;

  const blog = {
    title: 'Tamazgha: the real north Africa',
    author: 'Yan Amazigh',
    url: 'www.tamaz.tm',
    likes: 10000000000
  };

  const mockHandler = jest.fn();

  beforeEach(() => {
    container = render(<Blog blog={blog} likes={mockHandler} />);
  });

  test('render title & author, not url & likes', () => {});
});
