import { useEffect, useRef } from 'react';
import Babel from '../../assets/components/Babel';
import CSS from '../../assets/components/CSS';
import ESLint from '../../assets/components/ESLint';
import Firebase from '../../assets/components/Firebase';
import Github from '../../assets/components/Github';
import HTML from '../../assets/components/HTML';
import JavaScript from '../../assets/components/JavaScript';
import Jest from '../../assets/components/Jest';
import NPM from '../../assets/components/NPM';
import NodeJS from '../../assets/components/NodeJS';
import React from '../../assets/components/React';
import Redux from '../../assets/components/Redux';
import Sass from '../../assets/components/Sass';
import TypeScript from '../../assets/components/TypeScript';
import VIM from '../../assets/components/VIM';
import VSCode from '../../assets/components/VSCode';
import Webpack from '../../assets/components/Webpack';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import './About.scss';

function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useElementOnScreen(aboutRef, '-100px');

  useEffect(() => {
    if (!isOnScreen) return;
    leftColumnRef.current?.classList.add('animate-in');
    rightColumnRef.current?.classList.add('animate-in');
  }, [isOnScreen]);

  const technicalSkills = [
    { icon: <React />, name: 'React' },
    { icon: <Redux />, name: 'Redux' },
    { icon: <TypeScript />, name: 'TypeScript' },
    { icon: <JavaScript />, name: 'JavaScript' },
    { icon: <CSS />, name: 'CSS' },
    { icon: <Sass />, name: 'SASS' },
    { icon: <HTML />, name: 'HTML' },
    { icon: <Github />, name: 'Git' },
    { icon: <NPM />, name: 'NPM' },
    { icon: <Jest />, name: 'Jest' },
    { icon: <Webpack />, name: 'Webpack' },
    { icon: <Babel />, name: 'Babel' },
    { icon: <ESLint />, name: 'ESLint' },
    { icon: <NodeJS />, name: 'NodeJS' },
    { icon: <Firebase />, name: 'Firebase' },
    { icon: <VIM />, name: 'VIM' },
    { icon: <VSCode />, name: 'VSCode' },
  ];

  return (
    <section className='about' id='about' aria-labelledby='about__title'>
      <div className='column'>
        <div className='about__content' ref={aboutRef}>
          <div className='about__text' ref={leftColumnRef}>
            <h2 id='about__title'>About Me</h2>
            <p>
              Hi there, I&apos;m Bryan – a <strong>driven web developer</strong> with a passion for
              programming and knack for problem-solving. With experience building websites since the
              early 2000&apos;s and managing homelab servers running VMWare,{' '}
              <a href='https://github.com/bmilcs/dotfiles-old'>Linux</a> virtual machines and Docker
              containers, I&apos;ve honed my ability to learn and adopt new technology. As I pursue
              my dream of becoming a professional developer, I&apos;ve been devoting all my free
              time to learning modern web development through the Odin Project (
              <a href='https://www.github.com/bmilcs/odin-project' target='_blank' rel='noreferrer'>
                view my progress
              </a>
              ). I&apos;m excited to put my expertise to work and{' '}
              <strong>help your business</strong> grow and thrive. Let&apos;s work together to
              create something amazing!
            </p>
          </div>

          <div
            className={'about__skills'}
            aria-label="technologies i've learned part"
            ref={rightColumnRef}
          >
            <h3 className='about__skills-title'>My Skills</h3>
            <div className='about__skills-wrapper'>
              {technicalSkills.map((skill) => {
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
      </div>
    </section>
  );
}

export default About;
