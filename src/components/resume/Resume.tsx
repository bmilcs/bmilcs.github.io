import { useEffect, useRef } from 'react';
import headshot from '../../assets/resume/headshot.jpeg';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import './Resume.scss';

function Resume() {
  const resumeTitleRef = useRef<HTMLHeadingElement>(null);
  const isOnScreen = useElementOnScreen(resumeTitleRef);

  useEffect(() => {
    if (!isOnScreen) return;

    resumeTitleRef.current?.classList.add('animate-in');
  }, [isOnScreen]);

  return (
    <section className='resume' aria-label='my resume'>
      <div className='resume__content column centered_grid'>
        <h2 className='resume__title' ref={resumeTitleRef}>
          My Resume
        </h2>

        <div className='resume__container'>
          <div className='resume__header'>
            <h3 className='resume__title-inner'>
              Passionate & Driven
              <br /> Web Developer
            </h3>
          </div>

          <div className='resume__column-left'>
            <img src={headshot} className='resume__headshot' alt='Bryan Miller Headshot' />
            <p className='resume__name'>Bryan Miller</p>
            <p className='resume__profile'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque, explicabo
              fugit illo perspiciatis assumenda dicta, ex alias quia id incidunt consequuntur non
              optio nisi, ab autem cupiditate ad facere.
            </p>
            <div className='resume__personal-details'>
              <div className='resume__personal-details-row'>
                <p>Location</p>
                <p>MA, USA</p>
              </div>
              <div className='resume__personal-details-row'>
                <p>Education</p>
                <p>Higher Education</p>
              </div>
              <div className='resume__personal-details-row'>
                <p>Phone</p>
                <p>413-537-0333</p>
              </div>
            </div>
          </div>

          <div className='resume__column-right'>
            <h4 className='resume__section-header'>Experience</h4>
            <div className='resume__experience'>
              <h5>InfraWare</h5>
              <p>Remote</p>
              <p>Property Estimation</p>
              <p>2013 - Present</p>
              <ul>
                <li>Property Contents Valuation and Transcriptionist</li>
                <li>AutoHotkey Scripting, Workflow Automation & BPMN</li>
                <li>WordPress Web Design</li>
              </ul>
            </div>

            <div className='resume__experience'>
              <h5>Steelcase Hedberg Data Systems Internship</h5>
              <p>E. Windsor CT</p>
              <p>Software Development</p>
              <p>2009-2010</p>
              <ul>
                <li>Frontend UX/UI design and optimization</li>
              </ul>
            </div>

            <div className='resume__experience'>
              <h5>GoGeeks Computer Rescue</h5>
              <p>Springfield MA</p>
              <p>IT Support</p>
              <p>2007-2008</p>
              <ul>
                <li>
                  PC assembly, hardware upgrades, operating system installation and configuration,
                  system backups, troubleshooting and malware removal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
