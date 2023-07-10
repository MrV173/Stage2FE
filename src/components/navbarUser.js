import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import icon from '../assets/img/brand.svg'
import logo from '../assets/img/brandIcon.svg'
import "../assets/css/navbar.css"
import UserIcon from "../assets/img/userIcon.svg"
import MyTicketIcon from "../assets/img/myTicketIcon.svg"
import BillIcon from "../assets/img/billIcon.svg"
import LogOutIcon from "../assets/img/logoutIcon.svg"
import Triangle from "../assets/img/triangle.svg"



function TopNav() {

  return (

    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img src={icon} alt='icon' />
          <img src={logo} alt='logo' />
    </Navbar.Brand>
    <Nav className='justify-content-end'>
    <Dropdown>
      <Dropdown.Toggle variant='light'>
      <img src={UserIcon} alt='userIcon' />
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item variant="light">
            <img src={MyTicketIcon} alt='myTicketIcon' /> Tiket Saya
          </Dropdown.Item>
          <Dropdown.Item variang="light"><img src={BillIcon} alt='billIcon' /> Payment </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item variant="light"><img src={LogOutIcon} alt='logIcon' /> Log Out </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
      
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default TopNav;