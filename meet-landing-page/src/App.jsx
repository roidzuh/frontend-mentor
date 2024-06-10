import styled from 'styled-components';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Path from './components/Path';
import Feature from './components/Feature';
import Footer from './components/Footer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Main>
      <Logo />
      <Hero />
      <Path text="01" />
      <Feature />
      <Footer />
    </Main>
  );
}
