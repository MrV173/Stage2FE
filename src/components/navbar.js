import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import icon from '../assets/img/brand.svg'
import logo from '../assets/img/brandIcon.svg'
import Modal from 'react-bootstrap/Modal';
import "../assets/css/navbar.css"
import { useState, useContext } from 'react';
import Register from './auth/Register'
import Login from './auth/login'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/userContext';
import { Dropdown } from 'react-bootstrap';
import UserIcon from "../assets/img/adminIcon.svg"
import MyTicketIcon from "../assets/img/myTicketIcon.svg"
import LogOut from "../assets/img/logoutIcon.svg"
import addTicketIcon from "../assets/img/addTicket.svg"
import BillIcon from "../assets/img/billIcon.svg"
import Avatar from "../assets/img/avatarIcon.svg"


function TopNav() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [login, setLogin] = useState(false)
const loginClose = () => setLogin(false)
const loginOpen = () => setLogin(true)


  const [state, dispatch] = useContext(UserContext)
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
  }


  return (

    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <Register />
        </Modal.Body>
      </Modal>

      <Modal show={login} onHide={loginClose}>
        <Modal.Body>
            <Login />
        </Modal.Body>
      </Modal>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/auth" style={{ cursor:"pointer"}} >
          <img src={icon} alt='icon' />
          <img src={logo} alt='logo' />
    </Navbar.Brand>

   {state.user.role === "admin" ? (
    <Nav className='justify-content-end'>
    <Dropdown>
      <Dropdown.Toggle variant='light'>
      <img src={UserIcon} alt='userIcon' />
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item variant="light" as={Link} to="/addTicket">
            <img src={addTicketIcon} alt='addTicketIcon' />Tambah Tiket
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item variant="light" onClick={logout}>
            <img src={LogOut} alt='logIcon' />Log Out            
          </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
      
      </Nav>
   ) : state.isLogin? (
    <Nav className='justify-content-end'>
    <Dropdown>
      <Dropdown.Toggle variant='light'>
      <p style={{ color:"pink"}}>{state.user.username} <img src={Avatar} alt='avatar' /></p>
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item variant="light" as={Link} to="/userTicket">
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
   ) : (

    <Nav className='justify-content-end'>
      <Button variant="outline-danger" className='me-3' onClick={handleShow}>Daftar</Button>
      <Button variant="danger" onClick={loginOpen}>Login</Button>
      </Nav>
   )}
    </Container>
  </Navbar>
  </div>
  );
}

export default TopNav;