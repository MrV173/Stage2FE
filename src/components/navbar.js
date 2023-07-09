import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import icon from '../assets/img/brand.svg'
import logo from '../assets/img/brandIcon.svg'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../assets/css/navbar.css"
import { useState } from 'react';



function TopNav() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [login, setLogin] = useState(false)
const loginClose = () => setLogin(false)
const loginOpen = () => setLogin(true)

  return (

    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <div>
                <div className='titleRegister'>Daftar</div>
                <div>
                    <FloatingLabel controlId="floatingInput"label="Nama lengkap"className="mb-3">
                        <Form.Control type="text" placeholder='Nama lengkap' />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput"label="Username"className="mb-3">
                        <Form.Control type="text" placeholder='Username' />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput"label="Email"className="mb-3">
                        <Form.Control type="text" placeholder='Email' />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput"label="Password"className="mb-3">
                        <Form.Control type="password" placeholder='Passoword' />
                    </FloatingLabel>
                        <Form.Select className='mb-3'>
                        <Form.Label>Jenis Kelamin</Form.Label>
                            <option hidden>Jenis Kelamin</option>
                            <option>Laki-Laki</option>
                            <option>Perempuan</option>
                        </Form.Select>
                    <FloatingLabel controlId="floatingInput"label="No Telephone"className="mb-3">
                         <Form.Control type="text" placeholder='No Telphone' />
                    </FloatingLabel>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={5} placeholder='Alamat' />
                        </Form.Group>
                        <div className='containerRegisterButton'>
                            <button className='buttonRegister'>Daftar</button>
                        </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>

      <Modal show={login} onHide={loginClose}>
        <Modal.Body>
            <div>
            <div className='loginTitle'>Login</div>
            <div>    
            <FloatingLabel controlId="floatingInput"label="Username"className="mb-3">
                <Form.Control type="text" placeholder='Username' className='formControl' />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput"label="Password"className="mb-3">
                <Form.Control type="password" placeholder='Password' />
            </FloatingLabel>
            </div>
            </div>
            <div className='containerRegisterButton'>
                <button className='buttonRegister'>Login</button>
            </div>
            <div>
                <Form.Text>Belum punya akun? Klik Disini</Form.Text>
            </div>
        </Modal.Body>
      </Modal>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img src={icon} alt='icon' />
          <img src={logo} alt='logo' />
    </Navbar.Brand>
    <Nav className='justify-content-end'>
      <Button variant="outline-danger" className='me-3' onClick={handleShow}>Daftar</Button>
      <Button variant="danger" onClick={loginOpen}>Login</Button>
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default TopNav;