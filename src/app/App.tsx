import heroBG from '../assets/misc/hero-bg.jpg';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import { useProgressiveImage } from '../hooks/useProgressiveImage';
import './App.scss';

function App() {
  const heroBackground = useProgressiveImage(heroBG);

  if (!heroBackground) {
    return null;
  }

  return (
    <>
      <Hero backgroundImg={heroBackground} />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
