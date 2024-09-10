import Container from '../ui/Container';
import Paragraph from '../ui/Paragraph';
import Title from '../ui/Title';
import iconThanks from '../../assets/images/illustration-thank-you.svg';
import { useLocation } from 'react-router-dom';

const Thanks = () => {
  const location = useLocation();
  const { rating } = location.state;
  return (
    <>
      <Container className="text-center items-center">
        <img
          src={iconThanks}
          alt="icon-thank-you"
          className="h-[96px] w-[144px] lg:w-[162px] lg:h-[108px]"
        />

        <div className="px-3 py-[5px] bg-darkBlue rounded-[22.5px] ">
          <Paragraph
            text={`You selected ${rating} out of 5`}
            className={'text-orange'}
          />
        </div>

        <div className="flex flex-col gap-[17px] lg:gap-[7px]">
          <Title title="Thank you!" />
          <Paragraph
            text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
            className="text-lightGrey"
          />
        </div>
      </Container>
    </>
  );
};

export default Thanks;
