import BMIcon from '../../assets/components/BMIcon';
import './Header.scss';

function Header() {
  return (
    <header className='column' aria-label='header with navigation'>
      <BMIcon />
      <nav>
        <ul>
          <li>
            <a href='#portfolio'>portfolio</a>
          </li>
          <li>
            <a href='#about'>about</a>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
