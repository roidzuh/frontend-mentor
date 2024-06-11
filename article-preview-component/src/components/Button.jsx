import styled from 'styled-components';

const StyledShare = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.$bgnColor || '#ecf2f8'};

  border-radius: 50%;
  padding: 9px;
  width: 32px;
  height: 32px;
  transition: all 0.2s ease-in;

  & > svg {
    fill: ${(props) => props.$btnColor || '#6E8098'};
    transition: all 0.2s ease-in;
  }
`;

export default function Button({ bgnColor, btnColor, onIsOpen }) {
  return (
    <StyledShare $btnColor={btnColor} $bgnColor={bgnColor} onClick={onIsOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </StyledShare>
  );
}
