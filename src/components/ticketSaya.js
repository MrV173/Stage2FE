import React from "react";
import Brand from "../assets/img/reverseBrand.svg";
import Logo from "../assets/img/reverseBrandIcon.svg";
import '../assets/css/myticket.css';
import round from "../assets/img/o.svg";
import roundColor from "../assets/img/ocolor.svg";
import line from "../assets/img/line.svg";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import TopNav from "./nav";


export default function TicketSaya () {
    return (
        <div>
            <TopNav />
           <h2 className="ticket">Ticket Saya</h2>
            <div className="card">
                <div className="display">
                    <div className="topLeft">
                        <div className="brand">
                            <img src={Brand} alt="brand" className="img" />
                            <img src={Logo} alt="logo" className="img" />
                        </div>
                    </div>
                    <div>
                        <div className="kereta">
                        <h2>Kereta Api</h2>
                        Saturday, 21 Februari 2020
                        </div>
                    </div>
                </div>
                        <div className="midPart">
                            <div>
                                <h3>Argo Wilis</h3>
                                Eksekutif (H)
                            </div>
                            <div>
                               <div><img src={round} alt="round" /></div>
                               <div className="line"><img src={line} alt="line" /></div>
                               <div><img src={roundColor} alt="roundColor" /></div>
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

                    <div className="display">
                        <div className="orderedBox">
                        <Table className="ordered">
                            <thead>
                                <tr>
                                    <th>No. Tanda Pengenal</th>
                                    <th>Nama Pemesan</th>
                                    <th>No. Handphone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>31175033003970001</td>
                                    <td>Anto</td>
                                    <td>083896833112</td>
                                    <td>anto@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                        <div className="buttonBox">
                        <Button type="submit" className="button"> Bayar Sekarang</Button>
                        </div>
                    </div>  
            </div>
        </div>
    )
}