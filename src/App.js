import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/LandingPage';
import Trial from './components/trial'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='trial' element={<Trial />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
