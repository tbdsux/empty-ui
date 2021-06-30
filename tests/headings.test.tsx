import * as React from 'react';
import { render } from '../helpers/test-utils';
import { Heading, HeadingASProps } from '../src/index';

type testHeadingCasesProps = {
  [key: string]: {
    class: string;
    component: HeadingASProps;
  };
};
const testHeadingCases: testHeadingCasesProps = {
  h1: {
    class: 'heading-1',
    component: 'h1',
  },
  h2: {
    class: 'heading-2',
    component: 'h2',
  },
  h3: {
    class: 'heading-3',
    component: 'h3',
  },
  h4: {
    class: 'heading-4',
    component: 'h4',
  },
  h5: {
    class: 'heading-5',
    component: 'h5',
  },
  h6: {
    class: 'heading-6',
    component: 'h6',
  },
};

describe('test headings', () => {
  Object.entries(testHeadingCases).forEach(([key, value]) => {
    test(key, async () => {
      const { container } = render(<Heading as={value.component}>{value.component}</Heading>);

      expect(container.firstChild).toHaveClass(value.class);
    });
  });
});
