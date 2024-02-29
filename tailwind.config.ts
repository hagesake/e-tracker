import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        Quicksand: ['var(--font-Quicksand)']
      },
      colors: {
        base: '#D9D9D9',
        eerie_black: {
          DEFAULT: '#182025',
          100: '#050607',
          200: '#0a0d0f',
          300: '#0f1316',
          400: '#131a1e',
          500: '#182025',
          600: '#3c4f5b',
          700: '#5f7e92',
          800: '#92aab8',
          900: '#c9d4dc'
        },
        khaki: {
          DEFAULT: '#c6b497',
          100: '#2d2519',
          200: '#594a31',
          300: '#866f4a',
          400: '#ac9369',
          500: '#c6b497',
          600: '#d1c2ab',
          700: '#dcd1c0',
          800: '#e8e1d5',
          900: '#f3f0ea'
        },
        dark_slate_teal: {
          DEFAULT: '#34626c',
          100: '#0a1315',
          200: '#15272b',
          300: '#1f3a40',
          400: '#294d55',
          500: '#34626c',
          600: '#4a8c9a',
          700: '#70adba',
          800: '#a0c8d1',
          900: '#cfe4e8'
        },
        cadet_gray: {
          DEFAULT: '#839b97',
          100: '#19201f',
          200: '#333f3d',
          300: '#4c5f5c',
          400: '#667f7b',
          500: '#839b97',
          600: '#9bafac',
          700: '#b4c3c1',
          800: '#cdd7d5',
          900: '#e6ebea'
        },
        timberwolf: {
          DEFAULT: '#cfd3ce',
          100: '#292c28',
          200: '#51584f',
          300: '#7a8477',
          400: '#a5aca3',
          500: '#cfd3ce',
          600: '#d9dcd8',
          700: '#e3e5e2',
          800: '#eceeec',
          900: '#f6f6f5'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(14px, -20px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        blob: 'blob 7s infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/container-queries')
  ]
} satisfies Config

export default config
