export const $ = (...classnames: unknown[]) => {
  return classnames.filter(Boolean).join(' ');
};
