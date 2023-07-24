import React, { useEffect } from "react";
import "../assets/css/myTicket.css"
import Brand from "../assets/img/reverseBrand.svg"
import BrandIcon from "../assets/img/reverseBrandIcon.svg"
import { Col, Row, Badge } from "react-bootstrap";
import O from "../assets/img/o.svg"
import Ocolor from "../assets/img/ocolor.svg"
import Line from "../assets/img/line.svg"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { API } from "../config/api";



export default function MyTicketdetail () {

    let navigate = useNavigate()
    let { id } = useParams()

    let {data : ticket } = useQuery("ticketCache", async () => {
        const response = await API.get(`/ticket/${id}`)
        console.log("data ticket", response)
        return response.data.data
    })
  
    useEffect( () => {
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js"
        const midtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY

        let scriptTag = document.createElement("script")
        scriptTag.src = midtransScriptUrl
        scriptTag.setAttribute("data-client-key", midtransClientKey)

        document.body.appendChild(scriptTag)
        return ( () => {
            document.body.removeChild(scriptTag)
        })
    })

    const handleBuy = useMutation ( async (e) => {
        try {
            e.preventDefault() 

            const data = {
                ticket_id: ticket.id,
                user_id: ticket.user.id
            }


            const response = await API.post("/transaction", data)
            console.log("Transaction Succes :", response)

            const token = response.data.data.token
            window.snap.pay(token, {
                onSucces: function (result) {
                    console.log(result)
                    navigate("/")
                },
                onPending: function (result) {
                    console.log(result)
                    navigate("/")
                },
                onError: function (result) {
                    console.log(result)
                    navigate("/")
                },
                onClose : function() {
                    alert("You closed the popup without finishing the payment")
                }
            })
        } catch (error) {
            console.log("Transaction error : ", error)
        }
    })


    return (
        <div className="containerMyTicket">
            
            <div className="containerTicket">
    
                    <Row>
                        <Col sm={9}>
                            <div className="brandBorder">
                                <img src={Brand} alt="brand" />
                                <img src={BrandIcon} alt="brandIcon" />
                            </div>
                        </Col>
                        <Col sm={3}>
                            <h1>Kereta Api</h1>
                            <b>Saturday</b>, {ticket?.start_date}
                        </Col>
                    </Row>

                <div className="myTicketDetail">
                    <Row>
                        <Col lg={3}> 
                            <h3>{ticket?.name_train}</h3>
                            <p>{ticket?.type_train}</p> 
                            <Badge bg="warning" text="dark">pending</Badge>
                        </Col>
                        <Col lg={2}>
                            <div><img src={O} alt="o"/> </div>
                            <div style={{marginLeft:"7px", marginTop:"15px", marginBottom: "15px"}}><img src={Line} alt="line"/> </div>
                            <div><img src={Ocolor} alt="ocolor" /> </div>       
                        </Col>
                        <Col lg={2}>
                            <div>
                                <h4>{ticket?.start_time}</h4>
                                <p>{ticket?.start_date}</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>{ticket?.arrival_time}</h4>
                                <p>{ticket?.start_date}</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>Jakarta (GMR)</h4>
                                <p>Stasiun {ticket?.station.name}</p>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <h4>Surabaya</h4>
                                <p>Stasiun {ticket?.destination.name}</p>
                            </div>
                        </Col>
                    </Row>     
                </div>

                <div className="myTicketListUser">
                    <div className="listTicketUser">
                        <Row style={{paddingLeft:"10px", fontWeight:"bold"}}>
                            <Col>No.Tanda Pengenal</Col>
                            <Col>Nama Pemesan</Col>
                            <Col>No. Handphone</Col>
                            <Col>Email</Col>
                        </Row>
                        <hr />
                        <Row style={{paddingLeft:"10px"}}>
                            <Col>3117503300397001</Col>
                            <Col>Anto</Col>
                            <Col>083896833112</Col>
                            <Col>anto@gmail.com</Col>
                        </Row>
                    </div>
                    <div>
                        <button className="buttonMyTicket" onClick={(e) => handleBuy.mutate(e)}>Bayar sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}