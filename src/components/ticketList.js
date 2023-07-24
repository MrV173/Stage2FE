import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.svg"
import "../assets/css/ticketList.css"
import Modal from "react-bootstrap/Modal"
import { Link } from "react-router-dom";

export default function TicketList({item}) {

    const [showBuy, setShowBuy] = useState(false)
    const handleCloseBuy = () => setShowBuy(false)
    const handleShowBuy = () => setShowBuy(true)


    return (
        <div className="containerTicketList" >

            <Modal show={showBuy} onHide={handleCloseBuy}>
        <Modal.Body>
        <p> Your ticket has been added on your ticket list. Please do the payment immediately 
              <Link to={"/ticket/" + item.id} style={{ textDecoration:"none"}}>Click Here To Pay</Link>
            </p> 
        </Modal.Body>
      </Modal>

            <Container onClick={handleShowBuy}>
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