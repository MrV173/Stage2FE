import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Iklan1 from "../assets/img/iklan1.png"
import Iklan2 from "../assets/img/iklan2.png"
import Icon from "../assets/img/iconKereta.png"
import Rectangle from "../assets/img/rectangle.svg"
import Form from 'react-bootstrap/Form';
import Arrow from "../assets/img/iconSwitch.png"
import "../assets/css/homePage.css"
import TicketList from "./ticketList";
import Footer from "./footer";
import { useQuery } from "react-query";
import { API } from "../config/api";


export default function UserPage() {

    let { data : tickets } = useQuery("ticketsCache", async() => {
        const response = API.get("/tickets")
        return (await response).data
    })

    return (
        <div className="containerHome">
            <div>
                <Container style={{paddingTop: "40px"}}>
                    <Row>
                        <Col>
                            <div style={{color:"white"}}>
                                <h2>Selamat Pagi, Ticket Seekers!</h2>
                                <p style={{ fontSize:"20px"}}>Ingin pulkam dengan Good Deal?</p> 
                                <p style={{ fontSize:"20px",}}>Masuk atau Daftar Sekarang!</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="ads">
                                <Carousel>
                                    <Carousel.Item><img src={Iklan1} alt="iklan1" style={{width:"500px", height:"230px"}} /></Carousel.Item>
                                    <Carousel.Item><img src={Iklan2} alt="iklan2"style={{width:"500px", height:"230px"}} /></Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="containerSearchTicket">
                <div className="leftFlex">
                    <div className="leftTicket">
                        <img src={Rectangle} alt="rectangle" /><img src={Icon} alt="icon" /> Tiket Kereta Api
                    </div>
                </div>

                <div className="rightFlex">
                    <h3>Tiket Kereta Api</h3>
                    <Container>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div style={{width:"450px"}}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Asal</Form.Label>
                                    <Form.Control type="text" placeholder="Jakarta" />
                                </Form.Group>
                            </div>
                            <div style={{margin:"20px"}}>
                                <img src={Arrow} alt="arrow" style={{width: "50px", height:"50px"}} />
                            </div>
                            <div style={{width:"450px"}}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tujuan</Form.Label>
                                    <Form.Control type="text" placeholder="Surabaya" />
                                </Form.Group>
                            </div>
                        </div>
                        <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Tanggal</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <input className="form-check-input me-2" type="checkbox" value=""/>
                            <label className="form-check-label">Pulang Pergi</label>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Dewasa</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Bayi</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <button className="buttonSearchTicket">Cari tiket</button>
                        </Col>
                        </Row>
                    </Container>
                </div>              
            </div>
            <div className="headList">
                <Container>
                <Row>
                    <Col>Nama Kereta</Col>
                        <Col>Berangkat</Col>
                        <Col></Col>
                        <Col>Tiba</Col>
                        <Col>Durasi</Col>
                        <Col>Harga Per Orang</Col>
                </Row>
                </Container>
                </div>
                <div style={{ margin: "auto", width : "90%"}}>
                {tickets?.length !== 0 ? (
                        <div>
                            {tickets?.map((item,index) => (
                             <TicketList item={item} key={index} />   
                            ))}
                        </div>
                    ) : (

                        <div>
                            Ticket not Found
                        </div>
                    )}
                </div>
                <Footer />
        </div>
    )
}