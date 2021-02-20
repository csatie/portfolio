import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/coffee.json';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 10px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Lottie
        width="80px"
        height="80px"
        className="lottie-container basic"
        config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
      />
    </FooterWrapper>
  );
}
