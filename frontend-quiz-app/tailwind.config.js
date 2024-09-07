/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light':
          'url(/assets/images/pattern-background-mobile-light.svg)',
        'mobile-dark': 'url(/assets/images/pattern-background-mobile-dark.svg)',
        'tablet-light':
          'url(/assets/images/pattern-background-tablet-light.svg)',
        'tablet-dark': 'url(/assets/images/pattern-background-tablet-dark.svg)',
        'desktop-light':
          'url(/assets/images/pattern-background-desktop-light.svg)',
        'desktop-dark':
          'url(/assets/images/pattern-background-desktop-dark.svg)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Defining Rubik as a custom font family
      },
      fontSize: {
        display: ['144px', '100%'], // Display: Rubik Medium, 144px, 100% Line Height
        'heading-l-bold': ['64px', '100%'], // Heading L (Bold): Rubik Medium, 64px, 100% Line Height
        'heading-l-regular': ['64px', '100%'], // Heading L (Regular): Rubik Regular, 64px, 100% Line Height
        'heading-m': ['36px', '120%'], // Heading M: Rubik Regular, 36px, 120% Line Height
        'heading-s': ['28px', '100%'], // Heading S: Rubik Medium, 28px, 100% Line Height
        'body-m': ['24px', '150%'], // Body M: Rubik Regular, 12px, 150% Line Height
        'body-s': ['20px', '150%'], // Body S: Rubik Regular, 12px, 150% Line Height
        'display-mobile': ['88px', '100%'], // Display (mobile): Rubik Medium, 88px, 100% Line Height
        'heading-l-mobile': ['40px', '100%'], // Heading L (mobile): Rubik Regular, 40px, 100% Line Height
        'heading-m-mobile': ['20px', '120%'], // Heading M (mobile): Rubik Regular, 20px, 120% Line Height
        'heading-s-mobile': ['18px', '100%'], // Heading S (mobile): Rubik Regular, 18px, 100% Line Height
        'body-m-mobile': ['18px', '100%'], // Body M (mobile): Rubik Regular, 18px, 100% Line Height
        'body-s-mobile': ['14px', '150%'], // Body S (mobile): Rubik Regular, 14px, 150% Line Height
      },
      fontWeight: {
        medium: '500', // Font weight for Rubik Medium
        regular: '400', // Font weight for Rubik Regular
        bold: '700', // Font weight for Rubik Bold
      },
      fontStyle: {
        italic: 'italic', // Font style for Italic text
      },

      colors: {
        purpleAccent: '#A729F5', // Main Purple
        darkNavy: '#313E51', // Dark Blue
        navy: '#3B4D66', // Navy
        greyNavy: '#626C7F', // Grey Blue
        lightBluish: '#ABC1E1', // Light Blue
        lightGrey: '#F4F6FA', // Off White
        white: '#FFFFFF', // Pure White
        greenAccent: '#26D782', // Green Accent
        redAccent: '#EE5454', // Red Accent
      },
      dropShadow: {
        light: '0 16px 40px rgba(143, 160, 193, 0.14)',
        dark: '0 16px 40px rgba(49, 62, 81, 0.14)',
      },
    },
  },
  plugins: [],
};
