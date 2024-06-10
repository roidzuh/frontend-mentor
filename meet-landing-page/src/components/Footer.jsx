import styled from 'styled-components';
import Path from './Path';
import Button from './Button';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 92px 0px 72px 0px;
  width: 100%;
  background-image: linear-gradient(
      rgba(77, 150, 169, 0.9),
      rgba(77, 150, 169, 0.9)
    ),
    url('mobile/image-footer.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;

  h2 {
    margin-bottom: 24px;
    color: var(--light);
    padding: 0 24px;
  }

  p {
    color: var(--light);
    font-size: 18px;
    margin-bottom: 32px;
    padding: 0 24px;
  }

  @media (min-width: 768px) {
    padding: 92px 0px 66px 0px;
    background-image: linear-gradient(
        rgba(77, 150, 169, 0.9),
        rgba(77, 150, 169, 0.9)
      ),
      url('tablet/image-footer.jpg');

    h2 {
      font-size: 40px;
      line-height: 44px;
      padding: 0 156px;
    }

    p {
      padding: 0 98px;
    }
  }

  @media (min-width: 1310px) {
    padding: 116px 165px 104px 165px;
    flex-direction: row;
    text-align: start;
    background-image: linear-gradient(
        rgba(77, 150, 169, 0.9),
        rgba(77, 150, 169, 0.9)
      ),
      url('desktop/image-footer.jpg');

    h2 {
      padding: 0;
      margin-bottom: 0;
    }

    p {
      padding: 0;
      margin: 0 92px 0 125px;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <Path text="02" marginBottom="-30px" />
      <StyledFooter>
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <Button
          backgroundColor="#855FB1"
          spanColor="var(--purple-lite)"
          hoverColor="#B18BDD"
        >
          Download <span>v1.3</span>
        </Button>
      </StyledFooter>
    </>
  );
}
