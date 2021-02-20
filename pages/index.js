import { Wrapper } from '../src/components/Wrapper';
import Header from '../src/components/Header';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </Wrapper>
  );
}
