import useUI from './useUI';

export const useButton = () => {
  const { buttons } = useUI();

  return buttons;
};

export const useLinks = () => {
  const { links } = useUI();

  return links;
};
