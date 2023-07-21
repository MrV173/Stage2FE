import React from "react";
import NavbarUser from "../components/navbarUser"
import Warning from '../assets/img/error.svg'
import Brand from '../assets/img/reverseBrand.svg'
import BrandIcon from '../assets/img/reverseBrandIcon.svg'
import { Col, Row } from "react-bootstrap";
import Payment from '../assets/img/payment.png'
import QR from '../assets/img/qrCode.svg'
import O from "../assets/img/o.svg"
import Ocolor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import '../assets/css/userPayment.css'
import { useQuery } from "react-query";
import { API } from "../config/api"
import { useParams } from "react-router-dom";

export default function UserPayment() {

    let { data : user } = useQuery("userCache", async () => {
        const response = await API.get("/user")
        console.log(response)
        return response.data.data
    })

    return (
        <div>
        <div>
            <div className="userPaymentContainer">
                <h2>Invoice</h2>
                <div className="userPaymentColom">
                    <div className="flexLeft">
                        <div className="topInvoice">
                            <div><img src={Warning} alt="warning" /></div>
                            <div style={{ marginLeft:"20px", fontSize:"18px", padding:"10px"}}>Silakan melakukan pembayaran melalui M-Banking, E-Banking dan ATM ke 
                                No.Rek yang tertera.
                                <p style={{marginTop:"5px"}}>No.Rek : 09812312312</p>
                            </div>
                        </div>

                        <div className="midUserPayment">
                            <div className="userBrand"><img src={Brand} alt="brand" /> <img src={BrandIcon} alt="brandIcon" /> </div>
                            <div style={{paddingTop: "20px", paddingBottom:"20px"}}>
                                <Row style={{fontWeight:"bold", marginLeft:"10px"}}>
                                    <Col>No. Tanda Pengenal</Col>
                                    <Col>Nama Pemesan</Col>
                                    <Col>No.Handphone</Col>
                                    <Col>Email</Col>
                                </Row>
                                <hr />
                                <Row style={{color:"grey", marginLeft:"10px"}}>
                                    <Col>311750330013970001</Col>
                                    <Col>Anto</Col>
                                    <Col>083896833112</Col>
                                    <Col>anto@gmail.com</Col>
                                </Row>
                            </div>
                        </div>
                        <h2>Rincian Harga</h2>
                        <div>
                            <Row>
                                <Col>
                                    <div className="bottomUserPayment">
                                        <div className="typeTrainPayment">
                                            <Row>
                                                <Col>Argo Willis (Dewasa) x1</Col>
                                                <Col>Rp.250.000</Col>
                                            </Row>
                                        </div>
                                        <div className="totalPayment">
                                            <Row>
                                                <Col>Total</Col>
                                                <Col>Rp.250.000</Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div >
                                        <button className="buttonUserPayment">Bayar Sekarang</button>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src={Payment} alt="payment" style={{width:"250px", height:"250px"}}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                        <div className="flexRight">
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
                            <div className="middleMyTicketDetail"> 
                    <div className="myTicketDetail">
                    <Row>
                        <Col lg={2}>
                            <div><img src={O} alt="o"/> </div>
                            <div style={{marginLeft:"7px", marginTop:"15px", marginBottom: "15px"}}><img src={Line} alt="line"/> </div>
                            <div><img src={Ocolor} alt="ocolor" /> </div>       
                        </Col>
                        <Col>
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
                    </div>
            </div>
        </div>
        </div>

    )
}