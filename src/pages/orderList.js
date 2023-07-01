import React from "react";
import Table from "react-bootstrap/Table";
import Arrow from "../assets/img/arrow.svg";

const style = {
    border : {
        border : "solid",
        borderRadius : "8px",
        borderColor : "gray",
    }
}

export default function OrderList () {
    return (
        <div style={style.border}>
            <Table>
            <tbody>
            <tr>
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
    )
}