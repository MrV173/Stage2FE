import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/LandingPage';
import User from "./pages/UserLandingPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
