import React from "react";
import Brand from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"
import "../assets/css/ticketdetailadmin.css"
import { Row, Col } from "react-bootstrap"
import QR from '../assets/img/qrCode.svg'
import O from "../assets/img/o.svg"
import Ocolor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import Payment from "../assets/img/payment.png"


export default function TicketDetailAdmin() {
    return (
        <div>
            <div className="ticketDetailAdminTopBrand">
                <img src={Brand} alt="brand" />
                <img src={BrandIcon} alt="brandIcon" />
            </div>
            <h1>INVOICE</h1>
            <p>Kode INVOICE : INV0101</p>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <div className="ticketDetailAdminFlexLeft">
                            <div style={{padding:"10px", background:"#D0D0D0", marginBottom:"20px"}}>
                            <Row>
                                <Col>
                                    <h2>Kereta Api</h2>
                                    <p><b>Saturday,</b> 21 Februari 2020</p>
                                </Col>
                                <Col sm={4}>
                                    <div style={{padding:"10px"}}>
                                        <img src={QR} alt="qr" style={{width:"60px", height:"60px"}} />
                                        <p>INV0101</p>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                            <div className="ticketDetailAdminFlexLeft2"> 
                    <div className="myTicketDetail">
                    <Row>
                        <Col sm={1}>
                            <div><img src={O} alt="o"/> </div>
                            <div style={{marginLeft:"7px", marginTop:"15px", marginBottom: "15px"}}><img src={Line} alt="line"/> </div>
                            <div><img src={Ocolor} alt="ocolor" /> </div>       
                        </Col>
                        <Col sm={6}>
                            <div>
                                <h5>05.00</h5>
                                <p>21 Februari 2020</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h5>10.05</h5>
                                <p>21 Februari 2020</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>Jakarta (GMR)</h5>
                                <p>Stasiun Gambir</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h5>Surabaya (SBY)</h5>
                                <p>Stasiun Surabaya</p>
                            </div>
                        </Col>
                    </Row>     
                    </div>

                            </div>
                        </div>
                    <div>
                        <img src={Payment} alt="payment" />
                    </div>
                </div>
                <hr />
                    <div style={{padding :"20px", fontSize:"20px"}}>
                        <Row style={{fontWeight:"bold"}}>
                            <Col>No. Tanda Pengenal</Col>
                            <Col>Nama Pemesan</Col>
                            <Col>No.Handphone</Col>
                            <Col>Email</Col>
                        </Row>
                        <Row style={{marginTop:"20px"}}>
                            <Col>31175033003970001</Col>
                            <Col>Anto</Col>
                            <Col>083896833112</Col>
                            <Col>anto@gmail.com</Col>
                        </Row>
                    </div>
                <hr />
                <div style={{padding:"10px", marginBottom:"10px"}}>
                    <div className="ticketDetailAdminPrice">
                        <div style={{fontSize:"25px", fontWeight}}>Total</div>
                        <div>Rp.250.000</div>
                    </div>
                </div>
        </div>
    )
}