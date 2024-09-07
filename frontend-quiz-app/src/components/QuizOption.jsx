import { useTheme } from '../Context/ThemeContext';

export const QuizOption = ({
  option,
  index,
  onSubmit,
  selectedAnswer,
  feedback,
  trueAnswer,
}) => {
  const { theme } = useTheme();

  const getOptionLabel = (index) => {
    const letters = ['A', 'B', 'C', 'D']; // Add more if needed
    return letters[index] || '';
  };

  const optionLabel = getOptionLabel(index);

  // Determine the border color
  const getBorderColor = () => {
    if (!selectedAnswer || feedback === '') {
      // Purple border when selected but not submitted
      return selectedAnswer === option
        ? 'border-purpleAccent border-[3px]'
        : '';
    }
    // Green for correct, Red for incorrect after submission
    if (selectedAnswer === option) {
      return feedback === 'Correct!'
        ? 'border-greenAccent border-[3px]'
        : 'border-redAccent border-[3px]';
    }
    return '';
  };

  // Determine the background color for the selected option
  const getBackgroundColor = () => {
    if (selectedAnswer === option && feedback === '') {
      return 'bg-purpleAccent '; // Purple when selected but not yet submitted
    }

    if (selectedAnswer === option) {
      return feedback === 'Correct!' ? 'bg-greenAccent' : 'bg-redAccent';
    }

    return 'bg-lightGrey';
  };

  const status = () => {
    if (feedback && trueAnswer === option) {
      return (
        <img
          src="/assets/images/icon-correct.svg"
          alt="correct"
          className="absolute right-3"
        />
      );
    }

    if (feedback === 'Wrong!' && selectedAnswer === option) {
      return (
        <img
          src="/assets/images/icon-incorrect.svg"
          alt="incorrect"
          className="absolute right-3"
        />
      );
    }
  };

  return (
    <li
      className={`${
        theme === 'light'
          ? ' bg-white drop-shadow-light'
          : 'bg-navy drop-shadow-dark'
      }  ${getBorderColor()} h-16 p-3 flex items-center rounded-xl cursor-pointer gap-4 relative group md:h-20 md:p-3 md:gap-8 md:rounded-3xl xl:h-[92px] xl:min-w-[520px]`}
      onClick={() => onSubmit(option)}
    >
      <div
        className={` ${getBackgroundColor()} ${
          selectedAnswer !== option ? 'group-hover:bg-[#F6E7FF]' : ''
        }  text-body-m-mobile font-medium px-[14px] py-3 rounded-md  md:w-14 md:h-14 md:px-[18px] md:py-[14px] md:rounded-xl xl:rounded-lg`}
      >
        <p
          className={`  ${selectedAnswer === option ? 'text-white' : ''} ${
            selectedAnswer !== option ? 'group-hover:text-purpleAccent' : ''
          } text-greyNavy text-body-m-mobile font-medium md:text-heading-s`}
        >
          {optionLabel}
        </p>
      </div>

      <p
        className={`${theme === 'light' ? 'text-darkNavy' : 'text-white'} ${
          feedback ? 'pr-9' : ''
        } text-body-m-mobile font-medium md:text-heading-s`}
      >
        {option}
      </p>
      {status()}
    </li>
  );
};
