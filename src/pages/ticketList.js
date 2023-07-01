import React from "react";
import Arrow from "../assets/img/arrow.svg";
import "../assets/css/List.css";
import Table from "react-bootstrap/Table";

export default function TicketList() {

    return (
        <div className="body">
            <Table className="table">
            <thead>
                <tr>
                    <th>Nama Kereta</th>
                    <th>Berangkat</th>
                    <th></th>
                    <th>Tiba</th>
                    <th>Durasi</th>
                    <th>Harga Per Orang</th>
                </tr>
            </thead>
        <tbody>
            <tr className="border">
                <td>
                   <p>Argo Wilis</p>
                    Eksekutif (H)
                </td>
                <td>
                   <p>05.00</p>
                    Gambir
                </td>
                <td>
                    <img src={Arrow} alt="Arrow" />
                </td>
                <td>
                   <p>10.05</p>
                    Surabaya
                </td>
                <td>
                   <p>5j 05m</p>
                </td>
                <td>
                   <p> Rp. 250.000</p>
                </td>
            </tr>
            <tr className="border">
                <td>
                   <p>Argo Wilis</p>
                    Eksekutif (H)
                </td>
                <td>
                   <p>05.00</p>
                    Gambir
                </td>
                <td>
                    <img src={Arrow} alt="Arrow" />
                </td>
                <td>
                   <p>10.05</p>
                    Surabaya
                </td>
                <td>
                   <p>5j 05m</p>
                </td>
                <td>
                   <p> Rp. 250.000</p>
                </td>
            </tr>
            <tr className="border">
                <td>
                   <p>Argo Wilis</p>
                    Eksekutif (H)
                </td>
                <td>
                   <p>05.00</p>
                    Gambir
                </td>
                <td>
                    <img src={Arrow} alt="Arrow" />
                </td>
                <td>
                   <p>10.05</p>
                    Surabaya
                </td>
                <td>
                   <p>5j 05m</p>
                </td>
                <td>
                   <p> Rp. 250.000</p>
                </td>
            </tr>
        </tbody>
    </Table>
    </div>
    );
            
        
}