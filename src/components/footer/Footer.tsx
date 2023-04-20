import Github from '../../assets/components/Github';
import './Footer.scss';

function Footer() {
  return (
    <footer aria-label='footer containing github repo link'>
      <div className='footer__wrapper'>
        bmilcs
        <a href='https://www.github.com/bmilcs/portfolio' aria-label='Portfolio Github Repo'>
          <Github />
        </a>
        2023
      </div>
    </footer>
  );
}

export default Footer;
