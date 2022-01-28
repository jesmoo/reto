import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Input from '../components/Input';

test('renders content', () => {
  const component = render(<Input />);
  const input = component.container.querySelector('input');
  console.log(prettyDOM(input));
});
