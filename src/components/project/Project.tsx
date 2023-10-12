import { ReactNode, useEffect, useRef, useState } from 'react';
import Babel from '../../assets/components/Babel';
import Bash from '../../assets/components/Bash';
import CSS from '../../assets/components/CSS';
import Chai from '../../assets/components/Chai';
import ESLint from '../../assets/components/ESLint';
import Express from '../../assets/components/Express';
import Firebase from '../../assets/components/Firebase';
import HTML from '../../assets/components/HTML';
import JWT from '../../assets/components/JWT';
import JavaScript from '../../assets/components/JavaScript';
import Jest from '../../assets/components/Jest';
import MongoDB from '../../assets/components/MongoDB';
import Mongoose from '../../assets/components/Mongoose';
import NodeJS from '../../assets/components/NodeJS';
import Playwright from '../../assets/components/Playwright';
import React from '../../assets/components/React';
import Redux from '../../assets/components/Redux';
import Sass from '../../assets/components/Sass';
import TypeScript from '../../assets/components/TypeScript';
import Webpack from '../../assets/components/Webpack';
import { IProject } from '../../data/projects';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import Carousel from '../carousel/Carousel';
import DevIcon from '../dev_icon/DevIcon';
import './Project.scss';

type TProps = {
  data: IProject;
  number: number;
};

function Project({ data, number }: TProps) {
  const paddedProjectNumber = String(number + 1).padStart(2, '0');
  const projectA11yId = `project__name-${number}`;
  const articleRef = useRef<HTMLElementTagNameMap['article']>(null);
  const isOnScreen = useElementOnScreen(articleRef, '-100px');
  const [isTransitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    if (!isOnScreen) return;
    articleRef.current?.classList.add('animate-in');
  }, [isOnScreen]);

  return (
    <article
      className='project'
      aria-labelledby={projectA11yId}
      ref={articleRef}
      onTransitionEnd={() => {
        setTransitionDone(true);
      }}
    >
      <div className='project__header'>
        <div className='project__header-text'>
          {data.links ? (
            <>
              <h3 className='project__title' data-project-number={paddedProjectNumber}>
                <a href={data.links.live} target='_blank' rel='noreferrer' id={projectA11yId}>
                  {data.title}
                </a>
              </h3>

              <div className='project__links'>
                <a href={data.links.live} target='_blank' rel='noreferrer'>
                  LIVE
                </a>
                <p className='project__links-divider' aria-hidden='true'>
                  {' '}
                  |{' '}
                </p>
                <a href={data.links.repo} target='_blank' rel='noreferrer'>
                  CODE
                </a>
              </div>
            </>
          ) : (
            <h3
              className='project__title'
              data-project-number={paddedProjectNumber}
              id={projectA11yId}
            >
              {data.title}
            </h3>
          )}
        </div>

        <div className='project__dev-icons' aria-label='technology used to create project'>
          {data.techIcons.map((tech) => {
            let techComponent: ReactNode | null = null;
            let tooltip = '';

            switch (tech) {
              case 'react':
                techComponent = <React />;
                tooltip = 'React';
                break;
              case 'redux':
                techComponent = <Redux />;
                tooltip = 'Redux Tool Kit';
                break;
              case 'css':
                techComponent = <CSS />;
                tooltip = 'CSS';
                break;
              case 'firebase':
                techComponent = <Firebase />;
                tooltip = 'Firebase';
                break;
              case 'html':
                techComponent = <HTML />;
                tooltip = 'HTML';
                break;
              case 'javascript':
                techComponent = <JavaScript />;
                tooltip = 'JavaScript';
                break;
              case 'typescript':
                techComponent = <TypeScript />;
                tooltip = 'TypeScript';
                break;
              case 'node':
                techComponent = <NodeJS />;
                tooltip = 'NodeJS';
                break;
              case 'sass':
                techComponent = <Sass />;
                tooltip = 'SASS';
                break;
              case 'jest':
                techComponent = <Jest />;
                tooltip = 'Jest';
                break;
              case 'babel':
                techComponent = <Babel />;
                tooltip = 'Babel';
                break;
              case 'webpack':
                techComponent = <Webpack />;
                tooltip = 'Webpack';
                break;
              case 'eslint':
                techComponent = <ESLint />;
                tooltip = 'ESLint';
                break;
              case 'express':
                techComponent = <Express />;
                tooltip = 'Express';
                break;
              case 'mongodb':
                techComponent = <MongoDB />;
                tooltip = 'MongoDB';
                break;
              case 'mongoose':
                techComponent = <Mongoose />;
                tooltip = 'Mongoose';
                break;
              case 'bash':
                techComponent = <Bash />;
                tooltip = 'Bash';
                break;
              case 'chai':
                techComponent = <Chai />;
                tooltip = 'Chai';
                break;
              case 'mocha':
                techComponent = <Chai />;
                tooltip = 'Mocha';
                break;
              case 'jwt':
                techComponent = <JWT />;
                tooltip = 'JSON Web Tokens';
                break;
              case 'playwright':
                techComponent = <Playwright />;
                tooltip = 'Playwright';
                break;
            }

            return (
              <DevIcon tooltip={tooltip} key={tech}>
                {techComponent}
              </DevIcon>
            );
          })}
        </div>
      </div>

      <div className='project__content'>
        <div className='project__text'>
          {data.description &&
            data.description.map(({ type, value }) => {
              if (type === 'header')
                return (
                  <p className='project__text-header' key={value}>
                    {value}
                  </p>
                );
              else
                return (
                  <p className='project__text-p' key={value}>
                    {value}
                  </p>
                );
            })}
        </div>

        <div className='project__screenshots'>
          <Carousel imageArray={data.screenshots} isTransitionDone={isTransitionDone} />
        </div>
      </div>
    </article>
  );
}

export default Project;
