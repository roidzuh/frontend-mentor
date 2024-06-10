import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  color: #fff;
  padding: 16px 30px;
  border: none;
  border-radius: 29px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.3s ease-in;

  background-color: ${(props) => props.$backgroundColor || 'var(--green)'};

  span {
    color: ${(props) => props.$spanColor || 'var(--green-lite);'};
  }

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${(props) => props.$hoverColor || '#71C0D4'};
  }
`;

export default function Button({
  children,
  backgroundColor,
  spanColor,
  hoverColor,
}) {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $spanColor={spanColor}
      $hoverColor={hoverColor}
    >
      {children}
    </StyledButton>
  );
}
