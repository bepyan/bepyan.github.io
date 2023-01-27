export const unsplashImageList = [
  '/images/samples/unsplash-1.jpg',
  '/images/samples/unsplash-2.jpg',
  '/images/samples/unsplash-3.jpg',
  '/images/samples/unsplash-4.jpg',
  '/images/samples/unsplash-5.jpg',
  '/images/samples/unsplash-6.jpg',
  '/images/samples/unsplash-7.jpg',
  '/images/samples/unsplash-8.jpg',
  '/images/samples/unsplash-9.jpg',
  '/images/samples/unsplash-10.jpg',
  '/images/samples/unsplash-11.jpg',
  '/images/samples/unsplash-12.jpg',
  '/images/samples/unsplash-13.jpg',
  '/images/samples/unsplash-14.jpg',
  '/images/samples/unsplash-15.jpg',
  '/images/samples/unsplash-16.jpg',
  '/images/samples/unsplash-17.jpg',
  '/images/samples/unsplash-18.jpg',
  '/images/samples/unsplash-19.jpg',
  '/images/samples/unsplash-20.jpg',
];

export const getRandomUnsplashImage = () =>
  [...unsplashImageList].sort(() => Math.random() - 0.5)[0];

export const getRandomUnsplashImageList = (num = 4) =>
  [...unsplashImageList].sort(() => Math.random() - 0.5).slice(num);
