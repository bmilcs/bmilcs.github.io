import './Header.scss';

function Header() {
  return (
    <header>
      <div className='intro'>
        <img src='https://source.unsplash.com/random/400x400' alt='' />
        <p>Hi. My name is</p>
        <h1>Bryan Miller</h1>
        <h2>A Frontend Web Developer</h2>
      </div>
    </header>
  );
}

export default Header;
