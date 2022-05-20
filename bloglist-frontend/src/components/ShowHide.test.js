import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowHide from './ShowHide';

describe('<ShowHide />', () => {
  let container;

  beforeEach(() => {
    container = render(
      <ShowHide buttonLabel="view">
        <div className="testDiv">togglable content</div>
      </ShowHide>
    ).container;
  });

  test('render its children', () => {
    screen.findAllByText('toggable content');
  });

  test('at start the children not displayed', () => {
    const div = container.querySelector('.showContent');
    expect(div).toHaveStyle('display: none');
  });

  test('after clicking the button, children are displayed', async () => {
    const user = userEvent.setup();
    const button = screen.getByText('view');
    await user.click(button);

    const div = container.querySelector('.showContent');
    expect(div).not.toHaveStyle('display: none');
  });

  test('', () => {});
  test('', () => {});
  test('', () => {});
});
