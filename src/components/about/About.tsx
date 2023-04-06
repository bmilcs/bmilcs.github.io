import './About.scss';

function About() {
  return (
    <section className='about' id='about'>
      <div className='column full_height centered_grid'>
        <div className='about__content'>
          <h2>About Me</h2>
          <p>
            Hi! My name is Bryan and I love building things both on and offline. My interest in
            programming began in elementary school: kicking America Online users offline with Visual
            Basic. In high school, Adobe Photoshop, HTML & CSS caught my interest. Before long, I
            was responsible for 5 local band web sites and eventually took on a few small clients.
          </p>

          <p>
            Over the years, I have gained experience with BASH, AutoHotkey and PowerShell scripting
            to automate both personal and work related activities.
          </p>

          <p>
            <a href='https://github.com/bmilcs/dotfiles-old'>Linux</a>, networking & servers became
            a part of my life in the late 2010s. In my leisure time, I manage a Dell PowerEdge
            R730XD server, running VMWare ESXI and it hosts a virtualized TrueNAS environment,
            docker-compose stack, family media server and more. I have dabbled with reverse proxies
            (NGiNX), the LAMP stack, WordPress and several Linux distros: Debian, Ubuntu, Manjaro,
            Arch, DietPi, Raspbian, etc.
          </p>

          <p>
            In mid-2022, I narrowed my focus on becoming a professional developer. Following the{' '}
            <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>
              Odin Project
            </a>
            , all of my free time (after work and weekends) has gone toward learning the
            fundamentals of modern web development. Technology and problem solving have been
            lifelong passions of mine and I am excited to share my experience and continue learning
            in a professional setting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
