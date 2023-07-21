import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import icon from '../assets/img/brand.svg'
import logo from '../assets/img/brandIcon.svg'
import "../assets/css/navbar.css"
import UserIcon from "../assets/img/adminIcon.svg"
import addTicketIcon from "../assets/img/addTicket.svg"
import { useNavigate, Link } from 'react-router-dom';
import LogOutIcon from "../assets/img/logoutIcon.svg"
import { UserContext } from '../context/userContext';
import React, { useContext } from 'react';


function AdminTopNav(props) {
  const [state, dispatch] = useContext(UserContext)

  let navigate = useNavigate()

  const logout = () => {
    console.log(state)
    dispatch({
      type: "LOGOUT"
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
          <Dropdown.Item variant="light" as={Link} to="/addTicket" className={props?.title == "Add Ticket Admin"}>
            <img src={addTicketIcon} alt='addTicketIcon' />Tambah Tiket
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item variant="light" onClick={logout}>
            <img src={LogOutIcon} alt='logIcon' />Log Out            
          </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
      
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default AdminTopNav;