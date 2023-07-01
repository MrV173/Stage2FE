import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import icon from '../assets/img/brand.svg'
import logo from '../assets/img/brandIcon.svg'
import { useNavigate } from 'react-router-dom';

function TopNav() {

 const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={ () => navigate('/')}>
          <img src={icon} alt='icon' />
          <img src={logo} alt='logo' />
    </Navbar.Brand>
    <Nav className='justify-content-end'>
      <Button variant="outline-danger" className='me-3' onClick={ () => navigate('/register')}>Daftar</Button>
      <Button variant="danger" onClick={ () => navigate('/login')}>Login</Button>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default TopNav;