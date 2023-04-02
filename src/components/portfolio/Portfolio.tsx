import PROJECTS from '../../data/projects';
import Project from '../project/Project';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='column full_height centered_grid'>
        {PROJECTS.map((project, i) => {
          return <Project data={project} number={i} key={project.title} />;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
