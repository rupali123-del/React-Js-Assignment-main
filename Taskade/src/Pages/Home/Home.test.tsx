import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './Home';

test('render the button text Create Task', () => {
  // Write a test case to find that Button on Homepage has text "Create Task"
  render(<HomePage />);

  expect(screen.getByTestId('button')).toHaveTextContent('Create Task');
});
export {};
