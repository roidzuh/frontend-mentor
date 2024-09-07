import { useTheme } from '../Context/ThemeContext';

export const Button = ({ onClick, title }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`${
        theme === 'light' ? 'drop-shadow-light' : ''
      } bg-purpleAccent mb-3 h-14 w-full rounded-xl text-heading-s-mobile font-medium text-white  md:h-[92px] md:text-heading-s md:rounded-3xl md:mb-8`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
