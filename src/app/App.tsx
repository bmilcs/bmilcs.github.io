import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import './App.scss';

// export const WindowContext = createContext({ height: 0, width: 0 });

function App() {
  // const { height, width } = useWindowDimensions();

  return (
    // <WindowContext.Provider value={{ height, width }}>
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
    // </WindowContext.Provider>
  );
}

export default App;
