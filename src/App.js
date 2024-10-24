import bgVideo from './video/typing-video-carlos-arribas.mp4';
import githubLogo from './images/github-logo-white.png';
import linkedinLogo from './images/linkedin-logo-white.png';
import hackerrankLogo from './images/hackerrank-logo-white.png';
import resumeLogo from './images/resume-logo-white.png';
import emailLogo from './images/email-logo-white.png';
import './App.css';

function App() {
  return (
   <div className="App">
		<video autoPlay muted loop>
			<source src={bgVideo} type="video/mp4" />
		</video>
      <header className="viewpoint-header">
			<h1>
				Ryne Penley
			</h1>
				<div className="sub">Software and DevSecOps Engineer</div>
				<div className="linkBar">
					<a href="https://www.github.com/rpenley" target="_blank" rel="noreferrer"><img src={githubLogo} className="logo" alt="git-logo" /></a>
					<a href="https://www.linkedin.com/in/rynepenley" target="_blank" rel="noreferrer"><img src={linkedinLogo} className="logo" alt="linkedin-logo" /></a>
					<a href="https://www.hackerrank.com/rynepenley" target="_blank" rel="noreferrer"><img src={hackerrankLogo} className="logo" alt="hackerrank-logo" /></a>
					<a href="https://pub-18c80cb185bc47a6bcfd489e5a3e4c7f.r2.dev" target="_blank" rel="noreferrer"><img src={resumeLogo} className="logo" alt="resume-logo" /></a>
					<a href="mailto:rynepenley@gmail.com"><img src={emailLogo} className="logo" alt="email-logo" /></a>
				</div>
			</header>
			<div className="footer">
			</div>
    </div>
  );
}

export default App;
