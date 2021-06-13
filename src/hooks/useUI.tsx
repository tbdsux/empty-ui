import * as React from 'react';
import { UIContext } from '../provider/context';

const getContext = () => {
  const context = React.useContext(UIContext);

  if (context === undefined) {
    throw new Error('component is not wrapped with <UIProvider></UIProvider>');
  }

  return context;
};

const useUI = () => getContext();

export { getContext };
export default useUI;
