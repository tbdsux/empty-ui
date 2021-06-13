import * as React from 'react';
import BaseConfigProps from '../config';
import InitialConfig from './initial-config';

type UIProviderProps = {
  children: React.ReactNode;
  config?: BaseConfigProps;
};

const UIContext = React.createContext<BaseConfigProps>(InitialConfig);

const UIProvider = (props: UIProviderProps) => {
  return (
    <UIContext.Provider
      value={{
        ...InitialConfig,
        ...props.config
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export { UIContext };
export default UIProvider;
