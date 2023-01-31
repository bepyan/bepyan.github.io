const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
      dropShadow: {
        base: '0px 0px 10px rgba(234, 179, 8, 0.3)',
        'base-bold': '0px 0px 7px rgba(234, 179, 8, 0.7)',
      },
      fontFamily: {
        sans: ['inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'hr, thead, tbody tr': { borderColor: theme('colors.neutral.300') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            'code::before': false,
            'code::after': false,
          },
        },
        dark: {
          css: {
            blockquote: {
              borderLeftColor: theme('colors.neutral.700'),
              color: theme('colors.neutral.300'),
            },
            'hr, thead, tbody tr': { borderColor: theme('colors.neutral.700') },
            'ol li::marker, ul li::marker': {
              color: theme('colors.neutral.500'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents }) => {
      addComponents({
        '.text-primary': {
          '@apply text-neutral-900 dark:text-neutral-200': '',
        },
        '.text-secondary': {
          '@apply text-neutral-700 dark:text-neutral-400': '',
        },
        '.text-tertiary': {
          '@apply text-neutral-500 dark:text-neutral-500': '',
        },
        '.text-mute': {
          '@apply text-neutral-400 dark:text-neutral-600': '',
        },
        '.bg-primary': {
          '@apply bg-neutral-50 dark:bg-neutral-900': '',
        },
        '.bg-secondary': {
          '@apply bg-neutral-200/70 dark:bg-neutral-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-neutral-200 dark:bg-neutral-700/70': '',
        },
      });
    },
  ],
};
