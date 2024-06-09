import styled from 'styled-components';
import Card from './Card';

const WrapperCard = styled.ul`
  display: grid;
  grid-template-columns: 311px;
  row-gap: 25px;
  align-content: center;
  list-style: none;

  @media (min-width: 1050px) {
    grid-template-columns: repeat(3, 311px);
    grid-template-rows: repeat(4, auto);
    gap: 30px;
  }
`;

export default function CardList({ cardContent }) {
  return (
    <WrapperCard>
      {cardContent.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </WrapperCard>
  );
}
