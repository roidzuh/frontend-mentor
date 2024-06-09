import styled from 'styled-components';

const CardDetail = styled.li`
  border-top: 8px solid;
  padding: 28px;
  border-radius: 8px;
  box-shadow: 0 15px 30px -11px rgba(131, 166, 210, 0.5);

  h2 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    opacity: 50%;
    font-size: 13px;
    font-size: 400;
    letter-spacing: 0.09px;
    line-height: 23px;
    margin-bottom: 33px;
  }
  img {
    float: right;
  }

  &::before {
    content: '';
    position: relative;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  &:nth-child(1) {
    border-color: #44d3d2;
  }

  &:nth-child(2) {
    border-color: #ea5454;
  }

  &:nth-child(3) {
    border-color: #fcae4a;
  }

  &:nth-child(4) {
    border-color: #549ef2;
  }

  @media (min-width: 1050px) {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 2 /4;
    }

    &:nth-child(2) {
      grid-column: 2;
      grid-row: 1/3;
    }

    &:nth-child(3) {
      grid-column: 2;
      grid-row: 3/5;
    }

    &:nth-child(4) {
      grid-column: 3;
      grid-row: 2 /4;
    }
  }
`;

export default function Card({ card }) {
  return (
    <CardDetail>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <img src={card.svg} alt={card.title} />
    </CardDetail>
  );
}
