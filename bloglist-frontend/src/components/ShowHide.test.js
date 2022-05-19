import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowHide from './ShowHide';

describe('<ShowHide />', () => {
  let container;

  beforeEach(() => {
    container = render(
      <ShowHide buttonLabel="show...">
        <div className="testDiv">togglable content</div>
      </ShowHide>
    ).container;
  });
});
