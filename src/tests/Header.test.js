import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Header from '../components/Header';

test('renders content', () => {
  const component = render(<Header />);
  const a = component.container.querySelector('a');
  console.log(prettyDOM(a));
});
