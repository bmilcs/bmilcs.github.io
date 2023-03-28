import { useEffect } from 'react';
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
    <section className='hero'>
      <div className='hero__text'>
        <p>Hi. My name is...</p>
        <h2>Bryan Miller</h2>
        <h3>
          A Frontend <span>Web Developer</span>
        </h3>
        <p>I love coding, being creative and solving problems. </p>
        <Button type='standard'>My Projects</Button>
      </div>
      {/* <img src='https://source.unsplash.com/random/400x400' alt='' /> */}
    </section>
  );
}

export default Hero;