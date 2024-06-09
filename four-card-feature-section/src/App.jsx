import styled from 'styled-components';
import CardList from './components/CardList';

const cardContent = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    svg: 'icon-supervisor.svg',
  },
  {
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    svg: 'icon-team-builder.svg',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    svg: 'icon-karma.svg',
  },
  {
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    svg: 'icon-calculator.svg',
  },
];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperHeading = styled.div`
  text-align: center;
  margin-bottom: 76px;
  max-width: 540px;

  h1 {
    font-size: 24px;
    font-weight: 200;
    letter-spacing: 0.17px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 600;
    display: block;
  }

  p {
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.1px;
    opacity: 50%;
  }
`;

export default function App() {
  return (
    <Main>
      <WrapperHeading>
        <h1>
          Reliable, efficient delivery <span>Powered by Technology</span>
        </h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </WrapperHeading>
      <CardList cardContent={cardContent} />
    </Main>
  );
}
