import React, { useState } from "react";

import { Col, Row } from "react-bootstrap";
import "../assets/css/adminPage.css"
import { useQuery } from "react-query";
import { API } from "../config/api"; 
import ModalDelete from "../components/modal/modal-delete";
import Edit from "../assets/img/edit.svg"
import Trash from "../assets/img/trash.svg"
import Search from "../assets/img/search.svg"

export default function AdminLandingPage() {

    const [transactionID, setTransactionID] = useState()

    const [showDelete, setShowDelete] = useState(false)
    const handleCloseDelete = () => setShowDelete(false)
    const handleShowDelete = () => setShowDelete(true)

    let {data : transaction} = useQuery("adminTransactionCache", async () => {
        const response = await API.get("/transactions")
        console.log(response.data.data)
        return response.data.data
    })
    return (
        <div>
            <div className="adminPageContainer">
                <h1>List Transaksi</h1>
                <div>
                    <Row>
                        <Col>No.</Col>
                        <Col>Users</Col>
                        <Col>Tiket</Col>
                        <Col>Bukti Transfer</Col>
                        <Col>Status Payment</Col>
                        <Col>Action</Col>
                    </Row>
                </div>
             <hr /> 
             <div style={{fontWeight:"bold"}}>
                {transaction?.map((data,i)=> (
                    <Row>
                        <Col>{i + 1}</Col>
                        <Col>{data?.user.fullname}</Col>
                        <Col>{data?.ticket.name_train} - {data?.ticket.name_train}</Col>
                        <Col>Bukti Transfer</Col>
                        <Col style={{color:"orange"}}>Pending</Col>
                        <Col>
                            <Row>
                                <Col lg="3"><img src={Search} alt="search" /></Col>
                                <Col lg="3"><img src={Edit} alt="edit" /></Col>
                                <Col><img src={Trash} alt="trash" style={{cursor:"pointer"}} onClick={() => {handleShowDelete(); setTransactionID(data?.id)}}/></Col>
                            </Row>
                        </Col>
                        <hr />
                    </Row>
                    
                ))}
            
            
            <ModalDelete id={transactionID} show={showDelete} onHide={handleCloseDelete} />
        </div>
            </div>
        </div>
    )
}