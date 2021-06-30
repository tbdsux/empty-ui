import * as React from 'react';
import { render } from '../helpers/test-utils';
import { LinkDanger, LinkInfo, LinkPrimary, LinkSecondary, LinkWarning } from '../src/index';

const testBtnClasses = {
  primary: {
    class: 'primary-link',
    component: LinkPrimary,
  },
  secondary: {
    class: 'secondary-link',
    component: LinkSecondary,
  },
  info: {
    class: 'info-link',
    component: LinkInfo,
  },
  warning: {
    class: 'warning-link',
    component: LinkWarning,
  },
  danger: {
    class: 'danger-link',
    component: LinkDanger,
  },
};

describe('test links', () => {
  Object.entries(testBtnClasses).forEach(([key, value]) => {
    test(key, async () => {
      const { container } = render(<value.component>link button</value.component>);

      expect(container.firstChild).toHaveClass(value.class);
    });
  });
});
