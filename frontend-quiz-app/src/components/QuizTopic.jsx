import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { Icon } from './Icon';

export const QuizTopic = ({ quiz }) => {
  const { theme } = useTheme();

  return (
    <Link
      to={`quiz/${quiz.title}`}
      state={{ quiz }}
      className={`${
        theme === 'light'
          ? 'bg-white drop-shadow-light'
          : 'bg-navy drop-shadow-dark'
      } w-full h-16  rounded-xl flex items-center gap-4 pl-3 md:gap-8 md:h-20 md:rounded-3xl xl:px-5 xl:h-24 xl:min-w-[520px]`}
    >
      <Icon quiz={quiz} />
      <p
        className={`${
          theme === 'light' ? 'text-darkNavy' : 'text-white'
        } font-medium text-body-m-mobile md:text-heading-s`}
      >
        {quiz.title}
      </p>
    </Link>
  );
};
