import React from "react";
import NavbarUser from "../components/navbarUser"
import MyTicket from "../components/myTicket";
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function UserTicket () {

    let { data: tickets, refetch } = useQuery("userTicketCache", async () => {
        const response = await API.get("/tickets");
        return response.data.data;
      });


    return ( 
    <div>
    <h1 style={{marginBottom: "30px"}}>Ticket Saya</h1>
    <div style={{ margin: "auto", width : "90%"}}>
                    {tickets?.length !== 0 ? (
                        <div>
                            {tickets?.map((item,index) => (
                                <MyTicket item={item} key={index} />
                            ))}
                        </div>
                    ) : (

                        <div>
                            Ticket not Found
                        </div>
                    )}
                
                </div>
    
    </div>
    )
}