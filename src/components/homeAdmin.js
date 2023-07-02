import React from "react";
import TopNav from "./nav";
import { Table } from "react-bootstrap";
import Search from "../assets/img/search.svg"
import Edit from "../assets/img/edit.svg"
import Trash from "../assets/img/trash.svg"
import "../assets/css/adminPage.css"


export default function HomeAdmin () {
    return (
        <div>
            <div className="navbarTop">
                <TopNav />
            </div>
            <div className="body3">
                <div className="body1">
                    <div>
                       <div className="titleList"><h2> List Transaksi</h2></div>
                        <div>
                        <Table striped size="lg" className="thead">
                            <thead >
                                <tr>
                                    <th>No</th>
                                    <th>Users</th>
                                    <th>Tiket</th>
                                    <th>Bukti Transfer</th>
                                    <th>Status Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Anto</td>
                                    <td>Surabaya - Jakarta</td>
                                    <td>bca.jpg</td>
                                    <td> <font className="pending"> Pending </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Bastian Simanungkit</td>
                                    <td>Jakarta - Malang</td>
                                    <td>bni.jpg</td>
                                    <td> <font className="pending"> Pending </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Amin Subagiyo</td>
                                    <td>Jakarta - Bandung</td>
                                    <td>permata.jpg</td>
                                    <td> <font className="cancel"> Cancel </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Haris Astina</td>
                                    <td>Sumedang - Jakarta</td>
                                    <td>permata.jpg</td>
                                    <td> <font className="approved"> Approved </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Aziz Oni On</td>
                                    <td>Jakarta - Serang</td>
                                    <td>bi.jpg</td>
                                    <td> <font className="pending"> Pending </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Sugeng No Pants</td>
                                    <td>Jakarta - Serang</td>
                                    <td>bni.jpg</td>
                                    <td> <font className="pending"> Pending </font> </td>
                                    <td>
                                        <img src={Search} alt="search" /> <img src={Edit} alt="edit" /> <img src={Trash} alt="trash" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}