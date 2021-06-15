import { getContext } from './useUI';

export const useButton = () => {
  const { buttons } = getContext();

  return buttons;
};

export const useLinks = () => {
  const { links } = getContext();

  return links;
};
