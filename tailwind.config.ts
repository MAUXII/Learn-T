import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './node_modules/preline/preline.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors:{
        'white': '#f8f8f8',
        'black': '#060606',
        'branco': '#F1EDED',
        'preto' : '#0a0a0a'
      },
    },
  },
  plugins: [
// require('@tailwindcss/forms'),
require('preline/plugin'),

  ],
  darkMode: 'class',
}
export default config
