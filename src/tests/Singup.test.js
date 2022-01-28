import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Signup from '../components/Signup';

test('renders content', () => {
  const component = render(<Signup />);
  const section = component.container.querySelector('section');
  console.log(prettyDOM(section));
});
