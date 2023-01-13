export const unsplashImageList = [
  '/images/unsplash-1.jpg',
  '/images/unsplash-2.jpg',
  '/images/unsplash-3.jpg',
  '/images/unsplash-4.jpg',
  '/images/unsplash-5.jpg',
  '/images/unsplash-6.jpg',
  '/images/unsplash-7.jpg',
  '/images/unsplash-8.jpg',
  '/images/unsplash-9.jpg',
  '/images/unsplash-10.jpg',
  '/images/unsplash-11.jpg',
  '/images/unsplash-12.jpg',
  '/images/unsplash-13.jpg',
  '/images/unsplash-14.jpg',
  '/images/unsplash-15.jpg',
  '/images/unsplash-16.jpg',
  '/images/unsplash-17.jpg',
  '/images/unsplash-18.jpg',
  '/images/unsplash-19.jpg',
  '/images/unsplash-20.jpg',
];

export const getRandomUnsplashImage = () =>
  [...unsplashImageList].sort(() => Math.random() - 0.5)[0];

export const getRandomUnsplashImageList = (num = 4) =>
  [...unsplashImageList].sort(() => Math.random() - 0.5).slice(num);
