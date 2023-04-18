import Babel from '../../assets/components/Babel';
import CSS from '../../assets/components/CSS';
import ESLint from '../../assets/components/ESLint';
import Firebase from '../../assets/components/Firebase';
import HTML from '../../assets/components/HTML';
import JavaScript from '../../assets/components/JavaScript';
import Jest from '../../assets/components/Jest';
import NodeJS from '../../assets/components/NodeJS';
import React from '../../assets/components/React';
import Redux from '../../assets/components/Redux';
import Sass from '../../assets/components/Sass';
import TypeScript from '../../assets/components/TypeScript';
import VSCode from '../../assets/components/VSCode';
import Webpack from '../../assets/components/Webpack';
import './About.scss';

function About() {
  const technicalSkills = [
    { icon: <React />, name: 'React' },
    { icon: <Redux />, name: 'Redux' },
    { icon: <TypeScript />, name: 'TypeScript' },
    { icon: <JavaScript />, name: 'JavaScript' },
    { icon: <CSS />, name: 'CSS' },
    { icon: <Sass />, name: 'SASS' },
    { icon: <HTML />, name: 'HTML' },
    { icon: <Firebase />, name: 'Firebase' },
    { icon: <NodeJS />, name: 'NodeJS' },
    { icon: <Jest />, name: 'Jest' },
    { icon: <Babel />, name: 'Babel' },
    { icon: <Webpack />, name: 'Webpack' },
    { icon: <ESLint />, name: 'ESLint' },
    { icon: <VSCode />, name: 'VSCode' },
  ];

  return (
    <section className='about centered_grid full_height' id='about' aria-labelledby='about__title'>
      <div className='column'>
        <div className='about__content'>
          <div className='about__skills left' aria-label="technologies i've learned part 1">
            {technicalSkills.slice(0, technicalSkills.length / 2).map((skill) => {
              return (
                <div className='about__skill' key={skill.name}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>

          <div className='about__text'>
            <div className='about__text-wrapper'>
              <h2 id='about__title'>About Me</h2>
              <p>
                Hi! My name is Bryan and I love building things both on and offline. My interest in
                programming began in elementary school: kicking America Online users offline with
                Visual Basic. In high school, Adobe Photoshop, HTML & CSS caught my interest. Before
                long, I was responsible for 5 local band web sites and eventually took on a few
                small paying clients.
              </p>

              <p>
                Over the years, I have gained experience with BASH, AutoHotkey and PowerShell
                scripting to automate both personal and work related activities.
              </p>

              <p>
                <a href='https://github.com/bmilcs/dotfiles-old'>Linux</a>, networking & servers
                became a part of my life in the late 2010s. In my leisure time, I manage a Dell
                PowerEdge R730XD server, running VMWare ESXI and it hosts a virtualized TrueNAS
                environment, docker-compose stack, family media server and more. I have dabbled with
                reverse proxies (NGiNX), the LAMP stack, WordPress and several Linux distros:
                Debian, Ubuntu, Manjaro, Arch, DietPi, Raspbian, etc.
              </p>

              <p>
                In mid-2022, I narrowed my focus on becoming a professional developer. Following the{' '}
                <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>
                  Odin Project
                </a>{' '}
                (
                <a
                  href='https://www.github.com/bmilcs/odin-project/'
                  target='_blank'
                  rel='noreferrer'
                >
                  view my progress
                </a>
                ) , all of my free time, both after work & on weekends, has gone toward learning the
                fundamentals of modern web development. Technology and problem solving have been
                lifelong passions of mine and I am excited to share my experience and continue
                learning in a professional setting.
              </p>
            </div>
          </div>

          <div className='about__skills right' aria-label="technologies i've learned part 2">
            {technicalSkills.slice(technicalSkills.length / 2).map((skill) => {
              return (
                <div className='about__skill' key={skill.name}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
