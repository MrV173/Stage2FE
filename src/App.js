import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Daftar from './pages/register'
import Login from './pages/login'
import MyTicket from './pages/ticket';
import TicketDetail from './pages/ticketDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Daftar />} />
          <Route path="login" element={<Login />} />
          <Route path='myTicket' element={<MyTicket />} />
          <Route path='detailTicket' element={<TicketDetail />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
