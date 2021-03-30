import logo from './logo.svg';
import bgVideo from './video/typing_dark_03_videvo.mp4';
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
				<span>Computer Scientist for hire</span>
			</h1>
			</header>
			<div className="footer">
				Powered by <img src={logo} className="react-logo" alt="logo" />
			</div>
    </div>
  );
}

export default App;
