const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          150: '#f0f0f0',
          200: '#eaeaea',
          250: '#acacac',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      dropShadow: {
        base: '0px 0px 10px rgba(234, 179, 8, 0.3)',
        'base-bold': '0px 0px 7px rgba(234, 179, 8, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            strong: { color: theme('colors.gray.800') },
            a: {
              fontWeight: theme('fontWeight.normal'),
              textDecoration: 'none',
              borderBottom: `1px solid #333333`,
              code: {
                paddingBottom: '2px',
                borderBottom: `1px solid #33333370`,
                '&:hover': {
                  borderBottomWidth: '2px',
                },
              },
              strong: {
                borderBottom: `1px solid #33333390`,
                '&:hover': {
                  borderBottomWidth: '2px',
                },
              },
            },
            'h2,h3,h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.250'),
            strong: { color: theme('colors.gray.200') },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.gray.400'),
              code: {
                borderBottom: `1px solid ${theme('colors.yellow.300')}`,
                '&:hover': {
                  borderBottomWidth: '2px',
                },
              },
              strong: {
                borderBottom: `1px solid ${theme('colors.yellow.300')}`,
                '&:hover': {
                  borderBottomWidth: '2px',
                },
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
