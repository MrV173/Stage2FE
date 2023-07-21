import { Button, Modal,Badge } from 'react-bootstrap'
import { useMutation, useQueries, useQuery } from 'react-query';
import { API } from '../../config/api'
import Warning from '../../assets/img/warning.svg'
import { useParams } from "react-router-dom"


export default function ModalConfirm(props) {

  let { id } = useParams()

  let { data : ticket } = useQuery("ticketChace", async () => {
    const response = await API.get(`/ticket/${id}`)
    return response.data.data
  })

  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-Type" : "application/json"
        }
      }

      const data = { 
        ticket_id: ticket.id,
        user_id : ticket.user.id,
      }

      const body = JSON.stringify(data)

      const response = await API.post ("/transaction", body, config)
      console.log("transaction succes :" , response)
    } catch (error) {
      console.log("Transaction error : ", error)
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
            Are you sure Want to buy this ticket?
          </p>
          <Button variant="danger" style={{marginRight:"20px"}} onClick={(e) =>handleBuy.mutate(e)}>Yes</Button>
          <Button onClick={props.onHide}>No!!</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }