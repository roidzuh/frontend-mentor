import styled from 'styled-components';

const links = [
  { name: 'Github' },
  { name: 'Frontend Mentor' },
  { name: 'LinkedIn' },
  { name: 'Twitter' },
  { name: 'Instagram' },
];

const Container = styled.div`
  background-color: #1f1f1f;
  width: 384px;
  border-radius: 12px;
  padding: 40px;

  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 24px;
  place-items: center;
`;

const Avatar = styled.img`
  width: 88px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  text-align: center;

  h1 {
    font-size: 24px;
  }

  p {
    color: #c4f82a;
  }
`;

const Bio = styled.p`
  font-weight: bold;
`;

const Ul = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  row-gap: 16px;
`;

const LinkSosmed = styled.li`
  background-color: #333333;
  list-style: none;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  color: #fff;
  transition: 0.3s all;
  cursor: pointer;

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  &:hover {
    transition: 0.3s all;
    background-color: #c4f82a;
    color: #333333;
  }
`;

export default function App() {
  return (
    <Container>
      <Avatar src="avatar-jessica.jpeg" alt="avatar"></Avatar>
      <Wrapper>
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
      </Wrapper>
      <Bio>"Front-end developer and avid reader."</Bio>
      <Ul>
        {links.map((link) => (
          <LinkSosmed key={link.name}>
            <a href="#">{link.name}</a>
          </LinkSosmed>
        ))}
      </Ul>
    </Container>
  );
}
