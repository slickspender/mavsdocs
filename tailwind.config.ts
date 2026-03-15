import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        olive: {
          500: '#5c6622',
        },
        sage: {
          background: '#faf9f5',
          sidebar: '#f6f5f0',
          active: '#e5e4dc',
          border: '#e8e7e1',
        },
        dark: {
          DEFAULT: '#0f1117',
          50: '#1a1d27',
          100: '#161922',
          200: '#12141c',
          300: '#0f1117',
          400: '#0d0f14',
          500: '#0a0c10',
          600: '#080a0d',
          700: '#060709',
          800: '#030406',
          900: '#010102',
        },
      },
    },
  },
  plugins: [],
}

export default config
