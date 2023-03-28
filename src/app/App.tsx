import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Hero />
      </div>
    </div>
  );
}

export default App;
