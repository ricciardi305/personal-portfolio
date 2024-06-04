import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: {
          100: '#fcfdfe',
          200: '#fafcfc',
          300: '#f7fafb',
          400: '#f5f9f9',
          500: '#f2f7f8',
          600: '#c2c6c6',
          700: '#919495',
          800: '#616363',
          900: '#303132',
        },
        black: {
          100: '#d0d0d0',
          200: '#a2a2a2',
          300: '#737373',
          400: '#454545',
          500: '#161616',
          600: '#121212',
          700: '#0d0d0d',
          800: '#090909',
          900: '#040404',
        },
        cyan: {
          100: '#d6e2e4',
          200: '#aec5ca',
          300: '#85a8af',
          400: '#5d8b95',
          500: '#346e7a',
          600: '#2a5862',
          700: '#1f4249',
          800: '#152c31',
          900: '#0a1618',
        },
        teal: {
          100: '#d7f2f8',
          200: '#afe6f1',
          300: '#88d9ea',
          400: '#60cde3',
          500: '#38c0dc',
          600: '#2d9ab0',
          700: '#227384',
          800: '#164d58',
          900: '#0b262c',
        },
      },
    },
  },
  plugins: [],
}
export default config
