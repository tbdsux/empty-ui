import * as React from 'react';
import { getByTestId, render } from '../helpers/test-utils';
import { Container } from '../src';

describe('test container', () => {
  test('should exist class', () => {
    const { container: wrapper } = render(
      <Container>
        <div data-testid="content">sample</div>
      </Container>,
    );

    const testChild = getByTestId(wrapper, 'content');

    expect(wrapper.firstChild).toHaveClass('container-wrapper w-full');
    expect(testChild).toHaveTextContent('sample');
  });
});
