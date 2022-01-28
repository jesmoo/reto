import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import InputHome from '../components/InputHome';

test('renders content', () => {
  const component = render(<InputHome />);
  const section = component.container.querySelector('section');
  console.log(prettyDOM(section));
});
