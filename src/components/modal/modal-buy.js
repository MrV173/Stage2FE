import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ModalBuy (props) {
    return (
        <div>
            <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Body> 
            <p> Your ticket has been added on your ticket list. Please do the payment immediately 
               <Link to={`/ticket/${props.index}`}>Click here to pay</Link>
            </p> 
        </Modal.Body>
      </Modal>
        </div>
    )
}