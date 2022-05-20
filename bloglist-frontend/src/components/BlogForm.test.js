import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogForm from './BlogForm';

describe('<BlogForm />', () => {
  test('<BlogForm /> updates parent state and calls onSubmit', () => {
    const mockHandler = jest.fn();

    const component = render(<BlogForm createBlog={mockHandler} />);

    const title = component.container.querySelector('.titleInput');
    const author = component.container.querySelector('.authorInput');
    const url = component.container.querySelector('.urlInput');
    const sendButton = screen.getByText('create');

    fireEvent.change(title, {
      target: { value: 'Tamazgha: Azul!' }
    });
    fireEvent.change(author, {
      target: { value: 'amazCute' }
    });
    fireEvent.change(url, {
      target: { value: 'www.tamaz.com' }
    });
    fireEvent.submit(sendButton);

    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0].title).toBe('Tamazgha: Azul!');
    expect(mockHandler.mock.calls[0][0].author).toBe('amazCute');
    expect(mockHandler.mock.calls[0][0].url).toBe('www.tamaz.com');
  });
});
