import * as React from 'react';
import { render } from '../helpers/test-utils';
import { BtnDanger, BtnInfo, BtnPrimary, BtnSecondary, BtnWarning } from '../src/index';

const testBtnClasses = {
  primary: {
    class: 'primary-button',
    component: BtnPrimary,
  },
  secondary: {
    class: 'secondary-button',
    component: BtnSecondary,
  },
  info: {
    class: 'info-button',
    component: BtnInfo,
  },
  warning: {
    class: 'warning-button',
    component: BtnWarning,
  },
  danger: {
    class: 'danger-button',
    component: BtnDanger,
  },
};

describe('test buttons', () => {
  Object.entries(testBtnClasses).forEach(([key, value]) => {
    test(key, async () => {
      const { container } = render(<value.component>button</value.component>);

      expect(container.firstChild).toHaveClass(value.class);
    });
  });
});
