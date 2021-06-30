import * as React from 'react';
import { render } from '../helpers/test-utils';
import { EmptyComponent } from '../src';

describe('test empty component', () => {
  test('component', () => {
    const { container } = render(<EmptyComponent />);

    expect(container.children).toBe([]); // should have no children?
  });
});
