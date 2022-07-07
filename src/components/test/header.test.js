import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../header/header';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
