import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
};

export const defaultFadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultFadeInScaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultFadeInSlideToRightVariants: Variants = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultFadeInSlideToLeftVariants: Variants = {
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const cardSwitchVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
