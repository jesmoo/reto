import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Error from '../components/Error';

test('renders content', () => {
  const component = render(<Error />);
  const p = component.container.querySelector('p');
  console.log(prettyDOM(p));
});
