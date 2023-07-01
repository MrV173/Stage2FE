import React from "react";
import BrandName from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"
import '../assets/css/detailTicket.css'
import Round from '../assets/img/o.svg'
import RoundColor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import QR from "../assets/img/qrCode.svg"
import Pass from "../assets/img/pass1.svg"
import Clock from "../assets/img/clock.svg"
import Warning from "../assets/img/warning.svg"
import Table from "react-bootstrap/Table";
export default function DetailTicket () {
    return (
        <div>
            <div className="detailTicketBody">
                <div className="flex">
                    <div className="ticket">
                        <h1>E-TICKET</h1>
                    </div>
                    <div className="brandRight">
                        <div className="brandTopRight">
                                <img src={BrandName} alt="brandName" className="iconLeft"/>
                                <img src={BrandIcon} alt="brandIcon" className="iconRight"/>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="middleLeft">
                        <div className="leaveDate">
                            <h2>Kereta Api</h2>
                            Saturday, 21 Februari 2020
                        </div>
                        <div className="trainName">
                                <h3>Argo Wilis</h3>
                                Eksekutif (H)
                            </div>
                        <div className="shcedule">       
                            <div>
                               <div><img src={Round} alt="round" /></div>
                               <div><img src={Line} alt="line" className="line1" /></div>
                               <div><img src={RoundColor} alt="roundColor" /></div>
                            </div>
                            <div>
                                <div className="leave">
                                    <h4>05.00</h4>
                                    21 Februari 2020
                                </div>
                                <div>
                                    <h4>10.05</h4>
                                    21 Februari 2020
                                </div>
                            </div>
                            <div>
                                <div className="leave">
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

                    <div>
                        <div className="QR">
                            <img src={QR} alt="qr" />
                            <center>
                            <h2>TCK0101</h2>
                            </center>
                        </div>
                    </div>
                </div>
                
                <div className="lastContainer">
                    <div className="middleEnd">
                        <div className="flex1">  
                            <img src={Pass} alt="pass" /> <p>Tunjukkan e-ticket dan identitas pada penumpang saat checkin</p>
                        </div>
                        <div className="flex1">
                            <img src={Clock} alt="clock" /> <p>Check-in paling lambat 90 menit sebelum keberangkatan</p>
                        </div>
                        <div className="flex1">
                            <img src={Warning} alt="warning" /><p> Waktu tertera adalah waktu stasiun setempat </p>
                        </div>

                    </div>
                    <div>
                        <Table className="ticketDesc">
                        <tr>
                            <th>No. Tanda Pengenal</th>
                            <th>Nama Pemesan</th>
                            <th>No. Handphone</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>31175033003970001</td>
                            <td>Anto</td>
                            <td>083896833112</td>
                            <td>anto@gmail.com</td>
                        </tr>
                        </Table>
                    </div>

                </div>  


            </div>
        </div>
    )
}