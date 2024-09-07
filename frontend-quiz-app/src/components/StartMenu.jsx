import { useTheme } from '../Context/ThemeContext';
import data from '../data.json';
import { QuizTopic } from './QuizTopic';

export const StartMenu = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col xl:flex-row justify-between">
      <div>
        <h1
          className={`${
            theme === 'light' ? 'text-darkNavy' : 'text-white'
          } font-light text-heading-l-mobile  mb-4 md:text-heading-l-regular xl:mb-12`}
        >
          Welcome to the{' '}
          <span className="block font-medium">Frontend Quiz!</span>
        </h1>
        <p
          className={`${
            theme === 'light' ? 'text-greyNavy' : 'text-lightBluish'
          } text-body-s-mobile italic md:text-body-s`}
        >
          Pick a subject to get started.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 md:mt-16 md:gap-6 xl:mt-0">
        {data.quizzes.map((quiz, index) => {
          return <QuizTopic key={index} quiz={quiz} />;
        })}
      </div>
    </section>
  );
};
