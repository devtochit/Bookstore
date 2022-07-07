import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../Hompage/Homepage';

test('renders correctly', () => {
    const tree = renderer
        .create(<HomePage />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
+79998050076
