import Container from '../ui/Container';

import icon from '../../assets/images/icon-star.svg';
import Circle from '../ui/Circle';
import Title from '../ui/Title';
import Paragraph from '../ui/Paragraph';
import Button from '../ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (rating === 0) return;

    navigate(`/thanks`, { state: { rating } });
  };

  return (
    <>
      <Container className="max-w-[412px]">
        <div className="flex flex-col gap-[17px] lg:gap-[15px]">
          <Circle className="w-10 h-10 lg:w-12 lg:h-12 lg:mb-[15px]">
            <img src={icon} alt="icon-star" />
          </Circle>
          <Title title="How did we do?" />

          <Paragraph
            text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
            className="text-lightGrey"
          />
        </div>
        <div className="flex justify-between">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Circle
                key={index}
                className={` font-bold text-sm leading-6 tracking-[0.17px] cursor-pointer w-[42px] h-[42px] lg:h-[51px] lg:w-[51px] lg:text-base lg:tracing-[0.2px] transition-all duration-300 ease-in-out ${
                  index + 1 !== rating
                    ? 'hover:bg-orange hover:text-darkBlue'
                    : ''
                }  ${
                  index + 1 === rating
                    ? 'text-darkBlue bg-white'
                    : 'text-lightGrey'
                }`}
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </Circle>
            ))}
        </div>

        <Button onClick={handleSubmit} />
      </Container>
    </>
  );
};

export default Rating;
