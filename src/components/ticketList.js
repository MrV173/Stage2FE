import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.svg"
import "../assets/css/ticketList.css"

export default function TicketList({item}) {

    return (
        <div className="containerTicketList">
            <Container>
                <Row>
                    <Col>
                        <h5>{item?.name_train}</h5>
                        <p>{item?.type_train}</p>
                    </Col>
                    <Col>
                        <h5>{item?.start_date}</h5>
                        <p>{item?.station.name}</p>
                    </Col>
                    <Col> 
                        <img src={Arrow} alt="arrow" />
                    </Col>
                    <Col>
                        <h5>{item?.start_time}</h5>
                        <p>{item?.destination.name}</p>
                    </Col>
                    <Col>
                        <h5>{item?.arrival_time}</h5>
                    </Col>
                    <Col>
                        <h5 style={{ color: "pink", fontWeight: "bold"}}>{item?.price}</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}