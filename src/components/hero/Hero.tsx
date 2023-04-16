import { useEffect } from 'react';
import Github from '../../assets/Github';
import LinkedIn from '../../assets/LinkedIn';
import Button from '../button/Button';
import './Hero.scss';

function Hero() {
  useEffect(() => {
    // const octokit = new Octokit({
    //   auth: 'YOUR-TOKEN',
    // });
    // await octokit.request('GET /repos/{owner}/{repo}/stats/code_frequency', {
    //   owner: 'OWNER',
    //   repo: 'REPO',
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   },
    // });
  }, []);

  return (
    <section className='hero' aria-label='hero with github & linkedin links'>
      <div className='hero-content column centered_grid full_height'>
        <div className='hero__text'>
          <h4>Hey there :)</h4>
          <h2>I&apos;m Bryan Miller</h2>
          <h3>
            A Frontend <span>Web Developer</span>
          </h3>

          <div className='hero__cta'>
            <a
              href='https://github.com/bmilcs'
              target='_blank'
              rel='noreferrer'
              aria-label='My Github Profile'
            >
              <Github />
            </a>
            <a
              href='https://www.linkedin.com/in/bryan-michael-miller/'
              target='_blank'
              rel='noreferrer'
              aria-label='My LinkedIn Profile'
            >
              <LinkedIn />
            </a>
            <a href='#portfolio'>
              <Button type='outline'>My Portfolio</Button>
            </a>
          </div>
        </div>
      </div>

      <div className='custom-shape-divider-bottom-1680894835' aria-hidden='true'>
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
  );
}

export default Hero;
