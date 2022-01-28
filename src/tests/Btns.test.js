import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Btns from '../components/Btns';

test('renders content', () => {
  const mockHandler = jest.fn();

  const component = render(
    <Btns classNames={'prueba'} text={'testPrueba'} onClicks={mockHandler} />
  );
  const button = component.getByText('testPrueba');

  console.log(prettyDOM(button));
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
