import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 384px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 24px;
  box-shadow: 8px 8px 0 rgb(0, 0, 0);
  transition: 0.3s all ease;
  cursor: pointer;

  &:hover {
    transition: 0.3s all ease;
    box-shadow: 16px 16px 0 rgb(0, 0, 0);
  }

  ${css`
    @media (max-width: 768px) {
      width: 327px;
    }
  `}
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.h4`
  align-self: flex-start;
  font-weight: 800;
  background-color: #f4d04e;
  padding: 4px 12px;
  border-radius: 4px;
`;

const Date = styled.p``;

const Title = styled.h2`
  font-weight: 800;
  &:hover {
    color: #f4d04e;
  }
`;

const Text = styled.p`
  color: #7f7f7f;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ImageProfile = styled.img`
  width: 32px;
  border-radius: 50%;
`;

const Name = styled.h4``;

export default function App() {
  return (
    <Container>
      <Image src="illustration-article.svg" alt="svg" />
      <Wrapper>
        <Label>Learning</Label>
        <Date>Published 21 Dec 2023</Date>
        <Title>HTML & CSS foundations</Title>
        <Text>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Text>
      </Wrapper>
      <Profile>
        <ImageProfile src="image-avatar.webp" alt="profile"></ImageProfile>
        <Name>Greg Hooper</Name>
      </Profile>
    </Container>
  );
}
