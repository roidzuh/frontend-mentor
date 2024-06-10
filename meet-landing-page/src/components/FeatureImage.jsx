import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export default function FeatureImage({ image }) {
  return <StyledImage src={image}></StyledImage>;
}
