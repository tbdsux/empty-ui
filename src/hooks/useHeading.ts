import { getContext } from './useUI';

export const useHeading = () => {
  const { headings } = getContext();

  return headings;
};
