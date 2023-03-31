import Firebase from '../../assets/Firebase';
import NodeJS from '../../assets/NodeJS';
import React from '../../assets/React';
import Redux from '../../assets/Redux';
import Sass from '../../assets/Sass';
import TypeScript from '../../assets/TypeScript';
import comedyDbImg from '../../assets/comedy/desktop_home.png';
import DevIcon from '../dev_icon/DevIcon';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='column full_height centered_grid'>
        <article className='project'>
          <h3 className='project__title'>The Comedy DB</h3>
          <div className='project__dev-icons-container'>
            <DevIcon tooltip='React'>
              <React />
            </DevIcon>
            <DevIcon tooltip='Redux Tool Kit'>
              <Redux />
            </DevIcon>
            <DevIcon tooltip='TypeScript'>
              <TypeScript />
            </DevIcon>
            <DevIcon tooltip='SASS'>
              <Sass />
            </DevIcon>
            <DevIcon tooltip='Firebase: Authentication, Firestore (NoSQL), Cloud Functions, Analytics & AppCheck'>
              <Firebase />
            </DevIcon>
            <DevIcon tooltip='NodeJS: Cloud Functions'>
              <NodeJS />
            </DevIcon>
          </div>

          <div className='project__links-container'>
            <a href='https://comedy.bmilcs.com/'>Live URL</a>
            {/* <a
              href='https://github.com/bmilcs/odin-javascript-final-project'
              className='github-link'
            >
              <DevIcon tooltip='GitHub Repo'>
                <Github />
              </DevIcon>
            </a> */}
          </div>

          <div className='project-content'>
            <div className='project-text'>
              <h4>The Inspiration</h4>
              <p>
                I love standup and listen to{' '}
                <span data-tooltip="Your Mom's House, Monday Morning Podcast, Two Bears One Cave, Bad Friends, Whiskey Ginger, Blocks --- just to name a few.">
                  comedy podcasts
                </span>{' '}
                more often than I&apos;d like to admit. With the countless streaming platforms out
                there, even I find it challenging to stay up to date and not miss out when a
                comedian releases new a special.
              </p>

              <p>
                Standup comedy is a fairly small community, but I wanted users to find new comedians
                to follow and to be able to add their favorite comedians if missing from the site.
                Email notifications were a must. Nobody wants to check a website everyday for
                content that&apos;s released as infrequently as standup specials are. The most
                prolific comedians release new work once a year, but more often that not, there are
                several years in between.
              </p>

              <h4>High Level Breakdown</h4>

              <p>
                Powered by TMDB, Firebase Firestore & Cloud Functions running on Node v18, I created
                pubsub functions that fetch the latest specials for all comedians in the database.
                When users sign up and favorite a comedian, they receive e-mail notifications (via
                node-mailer) & GUI notifications (via database entries) whenever that comedian
                releases a new special.
              </p>

              <p>
                Users can add dynamically new comedians to the site by using the search bar. The
                initial search results page shows existing comedians and a list of people from the
                TMDB People API. To prevent actors from being added, extra API calls are issued to
                verify that the person has content with the TMDB standup keyword.
              </p>

              <p>
                Redux tool kit was used to handle state for user information, all comedians &
                specials.
              </p>
            </div>
            <img src={comedyDbImg} alt='The Comedy DB Mobile Special' />
          </div>
        </article>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Portfolio;
