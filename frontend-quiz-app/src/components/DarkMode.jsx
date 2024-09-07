import { useTheme } from '../Context/ThemeContext';

export const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <img
        src={
          theme === 'light'
            ? '/assets/images/icon-sun-dark.svg'
            : '/assets/images/icon-sun-light.svg'
        }
        alt="sun"
      />

      <input type="checkbox" name="theme" id="theme" className="peer hidden" />
      <label
        htmlFor="theme"
        className="bg-purpleAccent w-8 h-5 rounded-full cursor-pointer relative before:content-[''] before:absolute before:bg-white  before:w-3 before:h-3 before:rounded-full before:m-1 before:transition-all before:duration-300 peer-checked:before:translate-x-full md:w-12 md:h-7 md:before:w-5 md:before:h-5"
        onClick={handleTheme}
      ></label>

      <img
        src={
          theme === 'light'
            ? '/assets/images/icon-moon-dark.svg'
            : '/assets/images/icon-moon-light.svg'
        }
        alt="moon"
      />
    </div>
  );
};
