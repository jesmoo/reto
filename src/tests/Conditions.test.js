import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Conditions from '../components/Conditions';

test('renders content', () => {
  const component = render(<Conditions />);
  const a = component.container.querySelector('a');
  console.log(prettyDOM(a));
});
