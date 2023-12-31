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
import LogOut from "../assets/img/logoutIcon.svg"
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import React, { useContext } from 'react';



function UserTopNav(props) {

  const [state, dispatch] = useContext(UserContext)

  let navigate = useNavigate()

  const logout = () => {
    console.log(state)
    dispatch({
      type: "AUTH_ERROR"
  })
  navigate("/auth")
  }

  

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
          <Dropdown.Item variant="light" as={Link} to="/userTicket" className={props?.title == 'My Ticket'}>
            <img src={MyTicketIcon} alt='myTicketIcon' /> Tiket Saya
          </Dropdown.Item>
          <Dropdown.Item variant="light" as={Link} to="/payment"><img src={BillIcon} alt='billIcon' /> Payment </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item variant="light" onClick={logout}>
            <img src={LogOut} alt='logIcon' />Log Out
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
      
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default UserTopNav;