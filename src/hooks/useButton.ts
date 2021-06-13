import { getContext } from './useUI';

export const useButton = () => {
  const { buttons } = getContext();

  return buttons;
};
