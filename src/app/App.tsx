import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
