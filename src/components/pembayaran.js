import React from "react";
import TopNav from "./nav";
import Error from "../assets/img/error.svg"
import { Table } from "react-bootstrap";
import Invoice from "../assets/img/payment.png"
import QR from "../assets/img/qrCode.svg"
import Round from "../assets/img/o.svg"
import RoundColor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import "../assets/css/payment.css"
import Brand from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"

export default function Pembayaran () {
    return (
        <div>
            <div className="navbarTop">
                <TopNav />
            </div>
            <div className="containerPayment">
                <div className="titleInvoice">
                    <h2>Invoice</h2>
                </div>
                <div className="flex">
                    <div>
                        <div className="topLeft1">
                            <div className="warningSign"><img src={Error} alt="error" /></div> 
                            <div className="invoiceNote">
                                <p>Silakan melakukan pembayarang melalui M-Banking, dan ATM Ke No.rek yang terterta.</p>
                                <p>No.Rek : 09812312312 </p>
                            </div>
                        </div>

                        <div className="topLeft2">
                            <div className="brandTopLeft2">
                                <img src={Brand} alt="brand" className="brandNameTopLeft2"/>
                                <img src={BrandIcon} alt="brandIcon" />
                            </div>
                            <div>
                                <Table className="orderListTopLeft2">
                                    <thead>
                                    <tr>
                                        <th>No. Tanda Pengenal</th>
                                        <th>Nama Pemesan</th>
                                        <th>No. Handphone</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <td>31175033003970001</td>
                                        <td>Anto</td>
                                        <td>083896833112</td>
                                        <td>anto@gmail.com</td>
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                        <div>
                        <h2 className="titleDetailPrice"> Rincian Harga</h2>
                            <div className="topLeft3">
        
                                <div className="detailPrice">
                                    <div className="priceBox">
                                        <div className="priceFlex">
                                            <div className="prices"><h3>Argo wilis ( Dewasa ) x 1 </h3> </div>
                                            <div className="prices"><h3>Rp. 250.000</h3></div>
                                        </div>
                                        <div className="totalPrice">
                                            <div className="prices1"><h2>Total</h2> </div>
                                            <div><h2>Rp. 250.000</h2></div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                    <button type="submit" className="button"> Bayar Sekarang</button>
                                    </div>
                                </div>

                                <div>
                                    <img src={Invoice} alt="invoice" />
                                </div>
                            </div>
                        </div>

                    </div>
        
                    <div>
                        <div>
                            <div className="flex">
                                <div>
                                    <h2>Kereta Api</h2>
                                    Saturday, 21 Februari 2020
                                </div>
                                <div>
                                    <img src={QR} alt="qr" /> INV0101
                                </div>
                            </div>
                        <div>
                            <div>
                                <h3>Argo Wilis</h3>
                                Eksekutif (H)
                            </div>
                            <div className="midPart">                            
                            <div>
                               <div><img src={Round} alt="round" /></div>
                               <div className="line"><img src={Line} alt="line" /></div>
                               <div><img src={RoundColor} alt="roundColor" /></div>
                            </div>
                            <div>
                                <div>
                                    <h4>05.00</h4>
                                    21 Februari 2020
                                </div>
                                <div>
                                    <h4>10.05</h4>
                                    21 Februari 2020
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Jakarta (GMR)</h4>
                                    Stasiun Gambir
                                </div>
                                <div>
                                    <h4>Surabaya (SBY)</h4>
                                    Stasiun Surabaya
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}