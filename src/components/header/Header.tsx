import { useEffect, useRef, useState } from 'react';
import BMIcon from '../../assets/components/BMIcon';
import HamburgerIcon from '../../assets/components/HamburgerIcon';
import useElementOffScreen from '../../hooks/useElementOffScreen';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isHeaderOffScreen = useElementOffScreen(headerRef);

  useEffect(() => {
    if (!isHeaderOffScreen) {
      hamburgerRef.current?.classList.remove('hamburger-menu__sticky');
      return;
    }
    hamburgerRef.current?.classList.add('hamburger-menu__sticky');
  }, [isHeaderOffScreen]);

  return (
    <header className='column' aria-label='header with navigation' ref={headerRef}>
      <BMIcon />
      <nav className={isMenuOpen ? 'nav__open' : 'nav__closed'}>
        <ul>
          <li>
            <a href='#about' onClick={() => setIsMenuOpen(false)}>
              about
            </a>
          </li>
          <li>
            <a href='#portfolio' onClick={() => setIsMenuOpen(false)}>
              portfolio
            </a>
          </li>
          <li>
            <a href='#contact' onClick={() => setIsMenuOpen(false)}>
              contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        className='hamburger-menu'
        onClick={() => setIsMenuOpen((prev) => !prev)}
        ref={hamburgerRef}
      >
        <HamburgerIcon />
      </button>
    </header>
  );
}

export default Header;
