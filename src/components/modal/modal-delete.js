import { Button, Modal,Badge } from 'react-bootstrap'
import { useMutation } from 'react-query';
import { API } from '../../config/api'
import Warning from '../../assets/img/warning.svg'


export default function ModalDelete(props) {

    const Delete = useMutation (async () => {
        try {
            await API.delete(`/transaction-delete/${props.id}`)
            alert(`Succesfully Deleted`)
            props.onHide()
        } catch (error) {
            console.log(error)
        }
    })

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        <img src={Warning} alt="warning" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4><Badge bg="danger">Are you sure?</Badge></h4>
          <p>
            Are you sure Want to delete this ticket?
          </p>
          <Button variant="danger" style={{marginRight:"20px"}} onClick={() => Delete.mutate()}>Yes</Button>
          <Button onClick={props.onHide}>No!!</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }