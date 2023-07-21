import React from "react";
import "../assets/css/myTicket.css"
import Brand from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"
import { Col, Row, Badge } from "react-bootstrap";
import O from "../assets/img/o.svg"
import Ocolor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"


export default function MyTicket ({item}) {


    return (
        <div className="containerMyTicket">
            
            <div className="containerTicket">
    
                    <Row>
                        <Col sm={9}>
                            <div className="brandBorder">
                                <img src={Brand} alt="brand" />
                                <img src={BrandIcon} alt="brandIcon" />
                            </div>
                        </Col>
                        <Col sm={3}>
                            <h1>Kereta Api</h1>
                            <b>Saturday</b>, {item.start_date}
                        </Col>
                    </Row>

                <div className="myTicketDetail">
                    <Row>
                        <Col lg={3}> 
                            <h3>{item.name_train}</h3>
                            <p>{item.type_train}</p> 
                            <Badge bg="warning" text="dark">pending</Badge>
                        </Col>
                        <Col lg={2}>
                            <div><img src={O} alt="o"/> </div>
                            <div style={{marginLeft:"7px", marginTop:"15px", marginBottom: "15px"}}><img src={Line} alt="line"/> </div>
                            <div><img src={Ocolor} alt="ocolor" /> </div>       
                        </Col>
                        <Col lg={2}>
                            <div>
                                <h4>{item.start_time}</h4>
                                <p>{item.start_date}</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>{item.arrival_time}</h4>
                                <p>{item.start_date}</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>Jakarta (GMR)</h4>
                                <p>Stasiun {item.station.name}</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>Surabaya</h4>
                                <p>Stasiun {item.destination.name}</p>
                            </div>
                        </Col>
                    </Row>     
                </div>

                <div className="myTicketListUser">
                    <div className="listTicketUser">
                        <Row style={{paddingLeft:"10px", fontWeight:"bold"}}>
                            <Col>No.Tanda Pengenal</Col>
                            <Col>Nama Pemesan</Col>
                            <Col>No. Handphone</Col>
                            <Col>Email</Col>
                        </Row>
                        <hr />
                        <Row style={{paddingLeft:"10px"}}>
                            <Col>3117503300397001</Col>
                            <Col>Anto</Col>
                            <Col>083896833112</Col>
                            <Col>anto@gmail.com</Col>
                        </Row>
                    </div>
                    <div>
                        <button className="buttonMyTicket">Bayar sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}