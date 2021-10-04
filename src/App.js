import realtime from './firebase';
import { ref, onValue, push } from 'firebase/database'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netlify test test</h1>
        <p>Here's some more stuff</p>
        <form action="">
          <label htmlFor="userInput"></label>
          <input type="text" id="userInput"/>
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
