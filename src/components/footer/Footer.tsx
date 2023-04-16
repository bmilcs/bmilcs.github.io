import Github from '../../assets/Github';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='column'>
        bmilcs
        <a href='https://www.github.com/bmilcs/portfolio'>
          <Github />
        </a>
        2023
      </div>
    </footer>
  );
}

export default Footer;
