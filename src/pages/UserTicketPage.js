import React from "react";

import MyTicket from "../components/myTicket";
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function UserTicket () {

    let { data: user } = useQuery("userTicketCache", async () => {
        const response = await API.get("/user");
        console.log("data user:", response)
        return response.data.data;
      });


    return ( 
    <div>
    <h1 style={{marginBottom: "30px"}}>Ticket Saya</h1>
    <div style={{ margin: "auto", width : "90%"}}>
                    {user?.length !== 0 ? (
                        <div>
                            {user?.map((item,index) => (
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