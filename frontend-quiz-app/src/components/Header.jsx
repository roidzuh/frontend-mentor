import { useLocation } from 'react-router-dom';
import { DarkMode } from './DarkMode';
import { Icon } from './Icon';
import { useTheme } from '../Context/ThemeContext';

export const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const quiz = location.state?.quiz;

  return (
    <header className="h-[72px] w-full flex justify-between items-center px-6 md:px-16 md:h-[113px] xl:px-[140px] xl:h-[192px]">
      <div className="flex items-center gap-4 md:gap-6">
        <Icon quiz={quiz} />
        <p
          className={`${
            theme === 'light' ? 'text-darkNavy' : 'text-white'
          } text-heading-s-mobile font-medium md:text-heading-s`}
        >
          {quiz?.title}
        </p>
      </div>
      <DarkMode />
    </header>
  );
};
