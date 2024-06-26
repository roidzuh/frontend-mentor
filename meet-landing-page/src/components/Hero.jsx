import styled from 'styled-components';
import Button from './Button';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 54px 0 148px 0;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 64px;
    margin-bottom: 160px;
  }

  @media (min-width: 1310px) {
    margin-top: 108px;
    grid-template-columns: 1fr 2fr 1fr;
    margin-bottom: 194px;
  }
`;

const Wrapper = styled.div`
  padding: 0 24px;
  h1 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 32px;
  }

  span {
    display: block;
  }

  @media (min-width: 768px) {
    padding: 0 160px;
    h1 {
      font-size: 48px;
      line-height: 48px;
    }
  }

  @media (min-width: 1310px) {
    padding: 0;

    h1 {
      font-size: 64px;
      line-height: 64px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const ImgLeft = styled.img`
  width: 110%;
  margin-left: -5%;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
  @media (min-width: 1310px) {
    width: initial;
    content: url('desktop/image-hero-left.png');
    margin-left: -10%;
    position: relative;
    top: -45px;
  }
`;

const ImgRight = styled.img`
  display: none;
  @media (min-width: 1310px) {
    position: relative;
    top: 50px;
    margin-left: 10%;
    display: block;
    content: url('desktop/image-hero-right.png');
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function Hero() {
  return (
    <Container>
      <ImgLeft src="tablet\image-hero.png" alt="hero-image"></ImgLeft>

      <Wrapper>
        <h1>
          Group Chat <span>for Everyone</span>
        </h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <ButtonGroup>
          <Button>
            Download <span>v1.3</span>
          </Button>
          <Button backgroundColor="#855FB1" hoverColor="#B18BDD">
            What is it?
          </Button>
        </ButtonGroup>
      </Wrapper>
      <ImgRight alt="hero-image"></ImgRight>
    </Container>
  );
}
