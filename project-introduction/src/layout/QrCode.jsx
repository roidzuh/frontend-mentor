import styled from 'styled-components';

const Container = styled.div`
  height: 497px;
  width: 320px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const QrImage = styled.img`
  width: 288px;
  border-radius: 10px;
  margin-bottom: 24px;
`;

const Wrapper = styled.div``;

const TextH2 = styled.h2`
  color: #1f314f;
  font-weight: 700;
  text-align: center;
`;

const TextP = styled.p`
  font-size: 15px;
  color: #7d889e;
  font-weight: 400;
  text-align: center;
  padding: 16px;
`;

export default function QrCode() {
  return (
    <Container>
      <QrImage src="image-qr-code.png" alt="qr-code" />
      <Wrapper>
        <TextH2>Improve your front-end skills by building projects</TextH2>
        <TextP>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </TextP>
      </Wrapper>
    </Container>
  );
}
