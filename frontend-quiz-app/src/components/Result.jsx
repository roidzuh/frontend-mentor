import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { Icon } from './Icon';
import { Button } from './Button';

const Result = () => {
  const location = useLocation();
  const { score, quiz } = location.state;
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate(`/`);
  };

  return (
    <section className="flex flex-col xl:flex-row xl:gap-8 xl:justify-between">
      <div>
        <p
          className={`${
            theme === 'light' ? 'text-darkNavy' : 'text-white'
          } text-heading-l-mobile font-light md:text-heading-l-regular`}
        >
          Quiz completed{' '}
          <span className="block font-medium">You scored...</span>
        </p>
      </div>

      <div className="xl:min-w-[520px]">
        <div
          className={`${
            theme === 'light'
              ? 'bg-white drop-shadow-light'
              : 'bg-navy drop-shadow-dark'
          } mt-10 mb-3 p-8 h-fit w-full rounded-xl flex flex-col items-center justify-center gap-4 md:mt-16 md:mb-8 md:p-12 md:rounded-3xl md:gap-10 xl:mt-0`}
        >
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
          <p
            className={`${
              theme === 'light' ? 'text-darkNavy' : 'text-white'
            } text-display-mobile font-medium md:text-display`}
          >
            {score}
          </p>
          <p
            className={`${
              theme === 'light' ? 'text-greyNavy' : 'text-lightBluish'
            } text-body-m-mobile font-regular md:text-body-m`}
          >
            out of {quiz?.questions.length}
          </p>
        </div>

        <Button title="Play Again" onClick={handlePlayAgain} />
      </div>
    </section>
  );
};

export default Result;
