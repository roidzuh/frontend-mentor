import styled from 'styled-components';

const StyledPath = styled.p`
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 29px;
  padding: 15px 19px;
  font-weight: 900;
  margin-bottom: ${(props) => props.$marginBottom || '64px'};
  position: relative;
  background-color: #fff;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 56px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 84px;
    background-color: rgba(128, 128, 128, 0.25);
  }
`;

export default function Path({ text, marginBottom }) {
  return <StyledPath $marginBottom={marginBottom}>{text}</StyledPath>;
}
