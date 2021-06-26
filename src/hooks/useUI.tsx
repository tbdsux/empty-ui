import * as React from 'react';
import { UIContext } from '../provider/context';

const useUI = () => {
  const context = React.useContext(UIContext);

  if (context === undefined) {
    throw new Error('component is not wrapped with <UIProvider></UIProvider>');
  }

  return context;
};

export default useUI;
