import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.svg"
import "../assets/css/ticketList.css"

export default function TicketList() {
    return (
        <div className="containerTicketList">
            <Container>
                <Row>
                    <Col>
                        <h5> Argo Wilis</h5>
                        <p>Eksekutif (H)</p>
                    </Col>
                    <Col>
                        <h5>05.00</h5>
                        <p>Gambir</p>
                    </Col>
                    <Col> 
                        <img src={Arrow} alt="arrow" />
                    </Col>
                    <Col>
                        <h5>10.05</h5>
                        <p>Surabaya</p>
                    </Col>
                    <Col>
                        <h5>5j 05m</h5>
                    </Col>
                    <Col>
                        <h5 style={{ color: "pink", fontWeight: "bold"}}>Rp. 250.000</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}