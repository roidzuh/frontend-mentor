import styled from 'styled-components';

const LogoMeet = styled.img`
  margin-top: 48px;

  @media (min-width: 1310px) {
    margin-top: 80px;
  }
`;

export default function Logo() {
  return <LogoMeet src="logo.svg" alt="meet"></LogoMeet>;
}
