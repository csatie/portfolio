import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/coffee.json';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto 30px;
`;

const Background = styled.div`
  background: #000;
  border-radius: 50%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Background>
        <Lottie
          width="60px"
          height="60px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Background>
    </FooterWrapper>
  );
}
