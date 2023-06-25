import { useEffect, useRef } from 'react';
import Babel from '../../assets/components/Babel';
import Bootstrap from '../../assets/components/Bootstrap';
import CSS from '../../assets/components/CSS';
import ESLint from '../../assets/components/ESLint';
import Express from '../../assets/components/Express';
import Firebase from '../../assets/components/Firebase';
import Github from '../../assets/components/Github';
import HTML from '../../assets/components/HTML';
import JavaScript from '../../assets/components/JavaScript';
import Jest from '../../assets/components/Jest';
import MongoDB from '../../assets/components/MongoDB';
import NPM from '../../assets/components/NPM';
import NodeJS from '../../assets/components/NodeJS';
import React from '../../assets/components/React';
import Redux from '../../assets/components/Redux';
import Sass from '../../assets/components/Sass';
import Tailwind from '../../assets/components/TailwindCSS';
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
    { icon: <Express />, name: 'Express' },
    { icon: <MongoDB />, name: 'MongoDB' },
    { icon: <NodeJS />, name: 'NodeJS' },
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
    { icon: <Firebase />, name: 'Firebase' },
    { icon: <VIM />, name: 'VIM' },
    { icon: <VSCode />, name: 'VSCode' },
    { icon: <Tailwind />, name: 'TailwindCSS' },
    { icon: <Bootstrap />, name: 'Bootstrap' },
  ];

  return (
    <section className='about' aria-labelledby='about__title'>
      <div className='column'>
        <div className='about__content' ref={aboutRef}>
          <div className='about__text' ref={leftColumnRef}>
            <h2 id='about__title'>About Me</h2>
            <p>
              Hey there, I&apos;m Bryan and I like to build things. My web development journey began
              as a freshman in high school, and I&apos;ve been hooked on technology ever since.
            </p>

            <p>
              My true passions in life are learning and taking on challenges outside of my comfort
              zone. Over the years, I&apos;ve built computers and mechanical keyboards. I&apos;ve
              modified cell phones and video game consoles . I&apos;ve spun up countless Linux
              virtual machines on my homelab server, tinkered with Raspberry Pis, wired my house
              with Cat6A ethernet cable and deployed enterprise level networking equipment. To top
              it off, I&apos;ve used{' '}
              <a href='https://github.com/bmilcs/dotfiles-old' target='_blank' rel='noreferrer'>
                ArchLinux
              </a>{' '}
              as my primary operating system for 6 months, obsessing over every detail of my
              workstation.
            </p>

            <p>
              As time went on, I found myself drawn to writing BASH scripts to automate tasks on my
              Linux workstation and AutoHotkey scripts to improve my performance in my day job. I
              realized my true love of coding and knew it&apos;s what I want to do for the rest of
              my life.
            </p>

            <p>
              In the summer of 2022, I set a goal to become a professional web developer. Since
              then, I have devoted <em>every free minute of my life</em> to the pursuit of my dream.
              With The Odin Project (
              <a href='https://www.github.com/bmilcs/odin-project' target='_blank' rel='noreferrer'>
                view my progress here
              </a>
              ) as my guide, I have been relentless in my pursuit. Visual Studio Code has become my
              second home and my{' '}
              <a href='https://github.com/bmilcs' target='_blank' rel='noreferrer'>
                GitHub profile
              </a>{' '}
              back me up on that.
            </p>
            <p>
              I <strong>cannot wait</strong> to apply my problem solving skills and love of learning
              toward the completion of your business objectives. I am ready to hit the ground
              running so let&apos;s get started!
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
