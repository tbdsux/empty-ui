// config
import BaseConfigProps, { ButtonConfigProps } from './config';
// hooks
import { useButton, useUI } from './hooks';
import { UIContext, UIProvider } from './provider';

export * from './components';
export { UIContext };
export { BaseConfigProps, ButtonConfigProps };
export { useButton, useUI };
export default UIProvider;
