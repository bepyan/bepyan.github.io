export const $ = (...classnames: unknown[]) => {
  return classnames.filter(Boolean).join(' ');
};

export const isDev = process.env.NODE_ENV === 'development';
