import Github from '../../assets/components/Github';
import LinkedIn from '../../assets/components/LinkedIn';
import Button from '../button/Button';
import Header from '../header/Header';
import './Hero.scss';

function Hero() {
  return (
    <section className='hero-with-header'>
      <Header />
      <section className='hero' aria-label='hero with github & linkedin links'>
        <div className='hero-content column centered_grid full_height'>
          <div className='hero__text'>
            <h2>Bryan Miller</h2>
            <h3>
              Full Stack <span>Web Developer</span>
            </h3>

            <div className='hero__cta'>
              <a
                href='https://www.linkedin.com/in/bryan-michael-miller/'
                target='_blank'
                rel='noreferrer'
                aria-label='My LinkedIn Profile'
              >
                <LinkedIn />
              </a>
              <a href='#about'>
                <Button type='outline'>About Me</Button>
              </a>
              <a
                href='https://github.com/bmilcs'
                target='_blank'
                rel='noreferrer'
                aria-label='My Github Profile'
              >
                <Github />
              </a>
            </div>
          </div>
        </div>

        <div className='custom-shape-divider-bottom-1680894835' aria-hidden='true' id='about'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </section>
    </section>
  );
}

export default Hero;
