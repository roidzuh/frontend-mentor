import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { useState } from 'react';
import { QuizOption } from './QuizOption';
import { Button } from './Button';

export const Quiz = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const location = useLocation();
  const quiz = location.state?.quiz;
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleAnswer = (selected) => {
    if (!feedback) {
      setAnswer(selected);
      setShowError(false);
    }
  };

  const handleSubmit = () => {
    if (!answer) {
      setShowError(true);
      return;
    }

    if (!isSubmitted) {
      // Cek apakah jawaban benar atau salah
      const isCorrect = answer === quiz?.questions[number].answer;
      setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
      setScore(isCorrect ? score + 1 : score);
      setIsSubmitted(true);
    } else {
      // Lanjut ke pertanyaan berikutnya
      if (quiz?.questions.length === number + 1) {
        navigate(`/quiz/${quiz.title}/result`, { state: { score, quiz } });
      }
      setNumber((prevNumber) => prevNumber + 1);
      setAnswer(''); // Reset jawaban
      setIsSubmitted(false);
      setFeedback(''); // Reset feedback
    }
  };

  return (
    <section className="flex flex-col xl:flex-row xl:justify-between xl:gap-8">
      <div className="xl:max-w-[465px] xl:relative">
        <p
          className={`${
            theme === 'light' ? 'text-greyNavy' : 'text-lightBluish'
          } text-body-s-mobile italic md:text-body-s`}
        >
          Question {number + 1} of {quiz?.questions.length}
        </p>
        <p
          className={`${
            theme === 'light' ? 'text-darkNavy' : 'text-white'
          } mt-3 mb-6 font-medium text-heading-m-mobile md:text-heading-m md:mt-7 md:mb-10 `}
        >
          {quiz?.questions[number].question}
        </p>

        <progress
          className={`${
            theme === 'light' ? 'text-white' : ''
          } w-full progress-bar xl:absolute xl:top-[430px] xl:left-0`}
          value={number + 1}
          max={quiz?.questions.length}
        />
      </div>
      <div>
        <ul className="mt-10 flex flex-col gap-3 mb-3 md:mt-16 md:mb-8 md:gap-6 xl:mt-0">
          {quiz?.questions[number].options.map((option, index) => {
            return (
              <QuizOption
                key={index}
                option={option}
                index={index}
                onSubmit={handleAnswer}
                selectedAnswer={answer}
                feedback={feedback}
                trueAnswer={quiz?.questions[number].answer}
              />
            );
          })}
        </ul>

        <Button
          onClick={handleSubmit}
          title={
            !isSubmitted
              ? 'Submit Answer'
              : quiz?.questions.length === number + 1
              ? 'Finish Quiz'
              : 'Next Question'
          }
        />
        {showError && (
          <div className="mb-2 flex items-center justify-center gap-2">
            <img src="/assets/images/icon-incorrect.svg" alt="incorrect" />
            <p
              className={`${
                theme === 'light' ? 'text-redAccent' : 'text-white'
              } text-body-m-mobile md:text-body-m`}
            >
              Please select an answer
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
