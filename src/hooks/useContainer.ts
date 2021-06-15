import { getContext } from './useUI';

export const useContainer = () => {
  const { container } = getContext();

  return container;
};
