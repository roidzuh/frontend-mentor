import styled from 'styled-components';
import FeatureImage from './FeatureImage';

const StyledFeature = styled.section`
  margin-bottom: 148px;

  @media (min-width: 768px) {
    margin-bottom: 164px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 156px;
  }
`;

const WrapperImage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 64px;
  padding: 0 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 11px;
    margin-bottom: 48px;
    padding: 0 40px;
  }

  @media (min-width: 1025px) {
    padding: 0 165px;
    margin-bottom: 80px;
    gap: 30px;
  }
`;

const WrapperContent = styled.div`
  padding: 0 24px;
  text-align: center;

  h3 {
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    padding: 0 98px;

    h2 {
      font-size: 40px;
      line-height: 44px;
      padding: 0 62px;
    }
  }

  @media (min-width: 1025px) {
    padding: 0 450px;

    h2 {
      padding: 0 47px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export default function Feature() {
  return (
    <StyledFeature>
      <WrapperImage>
        <FeatureImage image="desktop/image-woman-in-videocall.jpg" />
        <FeatureImage image="desktop/image-women-videochatting.jpg" />
        <FeatureImage image="desktop/image-men-in-meeting.jpg" />
        <FeatureImage image="desktop/image-man-texting.jpg" />
      </WrapperImage>
      <WrapperContent>
        <h3>Built for modern use</h3>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </WrapperContent>
    </StyledFeature>
  );
}
