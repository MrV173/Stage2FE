import React, { useState } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Search from "../assets/img/search.svg"
import Edit from "../assets/img/edit.svg"
import Trash from "../assets/img/trash.svg"



export default function ListTransaction({item}) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div style={{fontWeight:"bold"}}>
            <Row>
                <Col>{item.id}</Col>
                <Col>{item.user.fullname}</Col>
                <Col>{item.ticket.name_train} - {item.ticket.name_train}</Col>
                <Col>Bukti Transfer</Col>
                <Col style={{color:"orange"}}>Pending</Col>
                <Col>
                <Row>
                    <Col lg="3"><img src={Search} alt="search" /></Col>
                    <Col lg="3"><img src={Edit} alt="edit" /></Col>

                    <Col><img src={Trash} alt="trash" style={{cursor:"pointer"}} onClick={() => setModalShow(true)}/></Col>
                </Row>
                
                </Col>
            </Row>
            <hr />
        </div>
    )
}