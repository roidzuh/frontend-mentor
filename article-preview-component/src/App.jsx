import styled, { keyframes } from 'styled-components';
import Button from './components/Button';
import { useState } from 'react';

const slideUp = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledMain = styled.main`
  width: 327px;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  position: relative;

  box-shadow: 0 40px 40px -10px rgba(201, 213, 225, 0.5);

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 730px;
    height: 280px;
  }
`;

const StyledImage = styled.img`
  width: 327px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media (min-width: 1024px) {
    border-radius: 10px 0 0 10px;
    width: 285px;
    height: 280px;
  }
`;

const StyledWrapper = styled.section`
  padding: 36px 32px 20px;

  & > h1 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 700;
    color: var(--Dark-Grayish);
    margin-bottom: 12px;
  }

  & > p {
    color: #6e8098;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    padding: 32px 40px;

    & > h1 {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.25px;
    }

    & > p {
      margin-bottom: 32px;
    }
  }
`;

const WrapperProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    gap: 16px;
  }
`;

const StyledImageProfile = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const StyledName = styled.p`
  font-weight: 700;
  color: #48556a;
`;

const StyledDate = styled.p`
  color: #9daec2;
`;

const StyledSosmed = styled.div`
  width: 327px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--Dark-Grayish);
  position: absolute;
  bottom: 0;

  /* Animasi */
  animation: ${slideUp} 0.3s ease-out;

  & > p {
    color: #9daec2;
    letter-spacing: 5px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    padding: 18px 36px;
    border-radius: 10px;
    right: -107px;
    bottom: 95px;

    &::after {
      content: '';
      width: 24px;
      height: 24px;
      background-color: inherit;
      transform: rotate(45deg);
      position: absolute;
      bottom: -10px;
      left: 30%;
    }
    & > Button {
      display: none;
    }
  }
`;

const WrapperSosmed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 21px;
  margin-right: 56px;

  @media (min-width: 1024px) {
    margin-right: 0;
  }
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsopen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <StyledMain>
      <StyledImage src="/drawers.jpg" alt="drawer"></StyledImage>
      <StyledWrapper>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <WrapperProfile>
          <div>
            <StyledImageProfile src="/avatar-michelle.jpg" alt="avatar" />
            <div>
              <StyledName>Michelle Appleton</StyledName>
              <StyledDate>28 Jun 2020</StyledDate>
            </div>
          </div>
          <Button onIsOpen={handleIsopen} />
        </WrapperProfile>
      </StyledWrapper>
      {isOpen && (
        <StyledSosmed>
          <p>SHARE</p>
          <WrapperSosmed>
            <img src="/icon-facebook.svg" alt="" />
            <img src="/icon-twitter.svg" alt="" />
            <img src="/icon-pinterest.svg" alt="" />
          </WrapperSosmed>
          <Button bgnColor="#6E8098" btnColor="#fff" onIsOpen={handleIsopen} />
        </StyledSosmed>
      )}
    </StyledMain>
  );
}
