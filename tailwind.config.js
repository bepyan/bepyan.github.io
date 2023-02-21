const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          470: '#808080',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          750: '#363636',
          800: '#262626',
          900: '#171717',
        },
      },
      dropShadow: {
        base: '0px 0px 10px rgba(234, 179, 8, 0.3)',
        'base-bold': '0px 0px 7px rgba(234, 179, 8, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        spoqa: ['var(--font-spoqa)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
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
    ({ addComponents, addUtilities }) => {
      addComponents({
        '.text-primary': {
          '@apply text-neutral-900 dark:text-neutral-200': '',
        },
        '.text-secondary': {
          '@apply text-neutral-700 dark:text-neutral-350': '',
        },
        '.text-tertiary': {
          '@apply text-neutral-600 dark:text-neutral-400': '',
        },
        '.text-mute': {
          '@apply text-neutral-500 dark:text-neutral-470': '',
        },
        '.bg-primary': {
          '@apply bg-neutral-50 dark:bg-neutral-900': '',
        },
        '.bg-secondary': {
          '@apply bg-neutral-150 dark:bg-neutral-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-neutral-200 dark:bg-neutral-750': '',
        },
        '.bg-mute': {
          '@apply bg-neutral-250 dark:bg-neutral-800': '',
        },
      });
      addUtilities(
        {
          '.no-scrollbar': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
            /* Firefox */
            'scrollbar-width': 'none',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
        ['responsive'],
      );
    },
  ],
};
