/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'custom-size-40': ['40px', { lineHeight: '100%' }],
        'custom-size-56': ['56px', { lineHeight: '100%' }],
        'custom-size-16': ['16px', { lineHeight: '150%' }],
        'custom-size-12': ['12px', { lineHeight: '150%' }],
      },
      colors: {
        'custom-gray': 'rgba(25, 24, 43, 0.25);',
        'custom-pale-navy': '#36384D',
        'custom-dark-navy': '#242742',
        'custom-vermellion': '#FF6155',
        'custom-vermellion-15': 'rgba(255, 97, 85,0.15);',
        'custom-gradien-1': '#FF6A3A',
        'custom-gradien-2': '#FF527B',
      },
    },
  },
  plugins: [],
};
