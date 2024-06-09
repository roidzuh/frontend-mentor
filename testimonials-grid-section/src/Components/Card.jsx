import styled from 'styled-components';

const Wrappper = styled.li`
  padding: 28px 32px 32px 32px;
  border-radius: 8px;
  box-shadow: 40px 60px 50px -47px rgba(72, 85, 106, 0.2474);

  &:nth-child(1) {
    background-color: #733fc8;
    background-image: url('bg-pattern-quotation.svg');
    background-repeat: no-repeat;
    background-position: 90% 0;
  }

  &:nth-child(4) {
    background-color: #19202d;
  }

  &:nth-child(3),
  &:nth-child(5) {
    background-color: #ffffff;
  }

  &:nth-child(2) {
    background-color: #48556a;
  }

  &:nth-child(1),
  &:nth-child(4) {
    img {
      border: 2px solid #a775f1;
    }
  }

  &:nth-child(1),
  &:nth-child(4) {
    color: #ffff;
    p {
      opacity: 0.7;
      color: #cfcfcf;
    }
  }
  &:nth-child(2) {
    color: #fff;
    p {
      opacity: 0.7;
    }
  }

  &:nth-child(3),
  &:nth-child(5) {
    background-color: #fff;
    color: #48556a;

    p {
      opacity: 0.7;
    }
  }

  @media (min-width: 1000px) {
    &:nth-child(1),
    &:nth-child(4) {
      grid-column: span 2;
    }

    &:nth-child(5) {
      grid-column: 4;
      grid-row: 1/3;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 18px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  h2 {
    font-size: 13px;
    font-weight: 500;
    line-height: 13px;
    margin-bottom: 4px;
  }

  p {
    font-size: 11px;
    line-height: 11px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Description = styled.p`
  line-height: 18px;
`;

export default function Card({ card }) {
  return (
    <Wrappper>
      <Profile>
        <img src={card.image} alt={card.name} />
        <div>
          <h2>{card.name}</h2>
          <p>{card.tag}</p>
        </div>
      </Profile>
      <Title>{card.title}</Title>
      <Description>{card.description}</Description>
    </Wrappper>
  );
}
