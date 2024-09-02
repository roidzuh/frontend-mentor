/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: '#24232C', // Nama: custom-dark
          medium: '#817D92', // Nama: custom-medium
          light: '#E6E5EA', // Nama: custom-light
          darker: '#18171F', // Nama: custom-darker
          mint: '#A4FFAF', // Nama: custom-mint
          red: '#F64A4A', // Nama: custom-red
          coral: '#FB7C58', // Nama: custom-coral
          yellow: '#F8CD65', // Nama: custom-yellow
        },
      },
      fontSize: {
        'heading-l': '32px', // Heading (L) font size
        'heading-m': '24px', // Heading (M) font size
        body: '18px', // Body font size
      },
      lineHeight: {
        'heading-l': '43px', // Heading (L) line height
        'heading-m': '31px', // Heading (M) line height
        body: '23px', // Body line height
      },
      fontWeight: {
        bold: 700, // Font weight for JetBrains Mono Bold
      },
    },
  },
  plugins: [],
};
