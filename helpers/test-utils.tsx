import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import UIProvider from '../src';

const AllTheProviders: React.FC = ({ children }) => (
  <UIProvider
    config={{
      buttons: {
        primary: 'primary-button',
        secondary: 'secondary-button',
        info: 'info-button',
        warning: 'warning-button',
        danger: 'danger-button',
      },
    }}
  >
    {children}
  </UIProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
