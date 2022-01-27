import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Progress from '../components/Progress';

test('renders content', () => {
  const component = render(<Progress />);
  const span = component.container.querySelector('span');
  console.log(prettyDOM(span));
});
