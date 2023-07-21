import React from "react";
import { Col, Row } from "react-bootstrap";
import Brand from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"
import "../assets/css/myTicketDetail.css"
import O from "../assets/img/o.svg"
import Ocolor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import QR from "../assets/img/qrCode.svg"
import Pass1 from "../assets/img/pass1.svg"
import Clock from "../assets/img/clock.svg"
import Warning from "../assets/img/warning.svg"





export default function ticketDetail() {
    return (
        <div>
            <div className="myTicketDetailContainer">
                <div className="topMyTicketDetail">
                    <Row>
                        <Col>
                        <h1>E-TICKET</h1>
                        <p>Kode Invoice : INV0101</p>
                        </Col>
                        <Col lg={4}>
                            <div className="brandMyTicketDetail">
                                <img src={Brand} alt="brand" />
                                <img src={BrandIcon} alt="brandIcon" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <h2>Kereta Api</h2>
                <p>Saturday, 21 Februari 2020</p>
                <div>
                    <h3>Argo Wilis</h3>
                    <p>Eksekutif (H) </p>
                </div>

               <div className="middleMyTicketDetail"> 
                    <div className="myTicketDetail">
                    <Row>
                        <Col lg={1}>
                            <div><img src={O} alt="o"/> </div>
                            <div style={{marginLeft:"7px", marginTop:"15px", marginBottom: "15px"}}><img src={Line} alt="line"/> </div>
                            <div><img src={Ocolor} alt="ocolor" /> </div>       
                        </Col>
                        <Col lg={2}>
                            <div>
                                <h4>05.00</h4>
                                <p>21 Februari 2020</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>10.05</h4>
                                <p>21 Februari 2020</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>Jakarta (GMR)</h4>
                                <p>Stasiun Gambir</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>Surabaya (SBY)</h4>
                                <p>Stasiun Surabaya</p>
                            </div>
                        </Col>
                    </Row>     
                    </div>

                    <div>
                        <div style={{ textAlign:"center"}}>
                            <img src={QR} alt="qr" />
                            <p style={{fontWeight:"bold", fontSize:"20px", marginTop:"10px"}}>TCK0101</p>
                        </div>
                    </div>
                </div>
                <hr />
                    <div className="bottomMyTicketDetail">
                        <Row>
                            <Col>
                                <div style={{display:"flex"}}>
                                    <div><img src={Pass1} alt="pass1" /></div>
                                    <div style={{marginLeft:"15px"}}>Tunjukkan e-ticket dan identitas pada penumpang saat checkin</div>         
                                </div>                 
                            </Col>
                            <Col>
                            <div style={{display:"flex"}}>
                                <div><img src={Clock} alt="clock" /></div>
                                <div style={{marginLeft:"15px"}}>Check-in <b>Paling lambat 90 menit</b> sebelum keberangkatan</div>                       
                            </div>
                            </Col>
                            <Col>
                            <div style={{display:"flex"}}>
                                <div><img src={Warning} alt="warning" /></div>
                                <div style={{marginLeft:"15px"}}> Waktu tertera adalah waktu stasiun setempat</div> 
                            </div>              
                            </Col>
                        </Row>
                    </div>
                <hr />
                <div className="userTicketDetail">
                    <Row style={{fontWeight:"bold", marginBottom:"20px"}}>
                        <Col>No.Tanda Pengenal</Col>
                        <Col>Nama Pemesan</Col>
                        <Col>No. Handphone</Col>
                        <Col>Email</Col>
                    </Row>
                    <Row style={{color : "gray", marginBottom:"20px"}}>
                        <Col>31175033003970001</Col>
                        <Col>Anto</Col>
                        <Col>083896833112</Col>
                        <Col>anto@gmail.com</Col>
                    </Row>
                </div>

            </div>
        </div>
    )
}