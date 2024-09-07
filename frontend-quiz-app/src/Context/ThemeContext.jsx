import { createContext, useContext, useEffect, useState } from 'react';

// membuat context
const ThemeContext = createContext();

// custom hook untuk mengakses context
export const useTheme = () => useContext(ThemeContext);

// provider untuk mengelola context
export const ThemeProvider = ({ children }) => {
  // Mendapatkan tema dari localStorage atau default ke 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });

  // Menyimpan tema ke localStorage setiap kali tema berubah
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
