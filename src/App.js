import logo from './Logo_UC3M.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola a todos :D
        </p>
        <a
          className="App-link"
          href="https://uc3m.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          UC3M COPYRIGHT
        </a>
      </header>
    </div>
  );
}

export default App;
