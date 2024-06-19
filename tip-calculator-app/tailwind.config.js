/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepTeal: '#00474B',
        lightTeal: '#26C2AE',
        slateGray: '#5E7A7D',
        lightSlate: '#9EBBBD',
        iceBlue: '#F3F9FA',
        coolGray: '#7F9D9F',
        darkSlate: '#3D6666',
        mediumSlate: '#547878',
        paleAqua: '#C5E4E7',
      },
    },
  },
  plugins: [
    //menghilangkan tombol "up" dan "down" yang secara default muncul di elemen input dengan tipe number
    function ({ addUtilities }) {
      addUtilities({
        '.hide-number-input-arrows': {
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0',
          },
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0',
          },
          '&': {
            '-moz-appearance': 'textfield' /* Firefox */,
          },
        },
      });
    },
  ],
};
