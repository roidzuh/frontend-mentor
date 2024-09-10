/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#262E38',
        lightGrey: '#969FAD',
        orange: '#FC7614',
        veryDarkBlue: '#131518',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #232A34, #181E27)',
      },
    },
  },
  plugins: [],
};
