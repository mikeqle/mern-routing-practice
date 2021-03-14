import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Display path="/:content/*optionalStyle" />
      </Router>
    </div>
  );
}

export default App;
