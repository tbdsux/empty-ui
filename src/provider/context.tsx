import * as React from 'react';
import BaseConfigProps from '../config';
import InitialConfig from './initial-config';

type UIProviderProps = {
  children: React.ReactNode;
  config?: BaseConfigProps;
};

const UIContext = React.createContext<BaseConfigProps>(InitialConfig);

const UIProvider = (props: UIProviderProps) => (
  <UIContext.Provider
    value={{
      ...InitialConfig,
      ...props.config,
    }}
  >
    {props.children}
  </UIContext.Provider>
);

UIProvider.defaultProps = {
  config: {},
};

export { UIContext };
export default UIProvider;
