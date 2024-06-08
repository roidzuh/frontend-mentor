import styled from 'styled-components';

const Container = styled.main`
  display: grid;
  grid-template-columns: 343px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 300px);

    & > img {
      height: 100%;
      content: url('image-product-desktop.jpg');
    }
  }
`;

const Label = styled.p`
  color: #6c7289;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 5px;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #1c232b;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-weight: 500;
  line-height: 23px;
  color: #6c7289;
  margin-bottom: 24px;
`;

const Price = styled.p`
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #3d8168;
  margin-bottom: 20px;

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #6c7289;
    line-height: 23px;
    position: relative;
    top: -5px;
    padding-left: 19px;
    text-decoration: line-through;
    /* vertical-align: middle; */
  }
`;

const Button = styled.button`
  font-weight: 700;
  border: none;
  color: #fff;
  background-color: #3d8168;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  img {
    width: 15px;
    height: 15px;
    margin-right: 11px;
    vertical-align: middle;
    transition: 0.3s;
  }

  &:hover {
    background-color: #1a4032;
  }
`;

const Wrapper = styled.div`
  padding: 24px;

  @media (min-width: 640px) {
    padding: 32px;

    ${Label} {
      margin-bottom: 20px;
    }

    ${Title} {
      margin-bottom: 24px;
    }

    ${Description} {
      margin-bottom: 29px;
    }

    ${Price} {
      margin-bottom: 30px;
    }
  }
`;

export default function App() {
  return (
    <Container>
      <img src="image-product-mobile.jpg" alt="parfume" />
      <Wrapper>
        <Label>PERFUME</Label>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Description>
        <Price>
          $149.99 <span>$169.99</span>
        </Price>
        <Button>
          <img src="icon-cart.svg" alt="icon-cart" /> Add to Cart
        </Button>
      </Wrapper>
    </Container>
  );
}
