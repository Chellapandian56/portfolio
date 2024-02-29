import Navbar from './components/Navbar/Navbar';
// import './App.css';
import Intro from './components/Landing/intro';
import Aboutme from './components/Aboutme/Aboutme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Aboutme />
    </div>
  );
}

export default App;
