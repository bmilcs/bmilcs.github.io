import "../styles/ComingSoon.scss";
import GitHubIcon from "./GitHubIcon";

function ComingSoon() {
  return (
    <div className="coming-soon-wrapper">
      <h1 className="page-title">
        bmilcs<span className="dot-com">.com</span>
      </h1>
      <p className="page-subtitle">coming soon</p>
      <a className="github-anchor" href="https://www.github.com/bmilcs">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ComingSoon;
