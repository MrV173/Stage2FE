import React from 'react';
import iklan1 from '../assets/img/iklan1.png';
import iklan2 from '../assets/img/iklan2.png';
import icon from '../assets/img/iconKereta.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import iconSwitch from '../assets/img/iconSwitch.png';
import TicketList from '../pages/ticketList';
import TopNav from './nav';


const style = {
    body : {
        backgroundColor : "#ff1493",
        height : "400px",
    },
  
    body2 : {
      backgroundColor : "white",
      padding : "0",
    },
  
    top : {
      display : "flex",
    },
  
    gretting : {
      margin : "20px",
      color : "white",
    },
  
    iklan1 : {
      width: "300px",
      height: "200px",
      margin : "20px",
    },
  
    orderTicket : {
      display : "flex",
      width: "1200px",
      height: "250px",
      backgroundColor: "white",
      margin : "auto",
      borderRadius : "8px",
      boxShadow: "0 0 15px grey",
    },
  
    iconSwitch : {
      width : "50px",
      height : "50px",
      marginLeft : "15px",
    }
  
  
  }


export default function Main() {
    return (
      <div className="App">
        <TopNav />
        <div style={style.body}>
          <div style={style.top}>
            <div style={style.gretting}>
              <h2>Selamat Pagi, Ticket Seekers !</h2>
              <h5>Ingin Pulkam dengan Good Deal ?</h5>
              <h5>Masuk atau Daftar Sekarang !!</h5>
            </div>
            <div>
              <img src={iklan1} alt="Iklan1" style={style.iklan1}/>;
              <img src={iklan2} alt="Iklan2" style={style.iklan1}/>; 
            </div>
          </div>
  
        <div style={style.body2}>
          <div style={style.orderTicket}>
            <div className="Icon">
              <svg width="9" height="53" viewBox="0 0 9 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="9" height="53" fill="#E67E22"/>
              </svg>
              <img src={icon} alt="icon" />
              Tiket Kereta Api
            </div>
            <div className="ticketForm">
              <h4 className="titleTicket">Tiket Kereta Api</h4>
            <div className="Form">
  
              <Form>
                <Form.Group className="mb-3" controlId="asal">
                <Form.Label>Asal</Form.Label>
                <Form.Control type="text" placeholder="Jakarta" cols={50} />
                </Form.Group>
              </Form>
  
              <img src={iconSwitch} alt="iconSwitch" style={style.iconSwitch} />
  
              <Form>
                <Form.Group className="mb-3" controlId="tujuan">
                <Form.Label>Tujuan</Form.Label>
                <Form.Control type="text" placeholder="Surabaya" />
                </Form.Group>
              </Form>
            </div>
  
            <div className="Form">
              <Form>
                <Form.Group className="mb-3" controlId="tanggalBerangkat">
                <Form.Label>Tanggal berangkat</Form.Label>
                <Form.Control type="date" />
                </Form.Group>
              </Form>
  
              <Form.Group className="checkbox" controlId="checkbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
  
              <Form>
                <Form.Group className="mb-3" controlId="dewasa">
                <Form.Label>Dewasa</Form.Label>
                <Form.Control type="number" placeholder="2" />
                </Form.Group>
              </Form> 
  
               <Form>
                <Form.Group className="mb-3" controlId="bayi">
                <Form.Label>Bayi</Form.Label>
                <Form.Control type="number" />
                </Form.Group>
              </Form>           
  
              <Button type="submit" className="button">
                Cari Tiket
              </Button>
              </div>
            </div>
          </div>
          </div>
          <TicketList />
        </div>
      </div>
    );
  }