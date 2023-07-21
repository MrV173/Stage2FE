import React from "react";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/navbarAdmin"
import "../assets/css/addTicket.css"


export default function AddAdminTicket() {

    const title = "Add Ticket Admin"
    document.title = "LandTick | " + title

    let Navigate = useNavigate()
    const [form, setForm] = useState({
        name_train: "",
        type_train: "",
        start_date:"", 
        station_id:"",
        start_time:"",
        destination_id:"",
        arrival_time:"",
        price:"",
        qty:"",
    })

    const {name_train, type_train, start_date, station_id, start_time, destination_id, arrival_time, price, qty} = form 


    let {data : destinations } = useQuery("destinationsCache", async () => {
        const response = await API.get("/destinations")
        return response.data.data
    })

    console.log("ini log", destinations)

    let {data : stations} = useQuery("stationsCache", async () => {
        const response = await API.get("/stations")
        return response.data.data
    }) 

    
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

           

            const formData = new FormData()
            formData.set("name_train", form.name_train)
            formData.set("type_train", form.type_train)
            formData.set("start_date", form.start_date)
            formData.set("station_id", form.station_id)
            formData.set("start_time", form.start_time)
            formData.set("destination_id", form.destination_id)
            formData.set("arrival_time", form.arrival_time)
            formData.set("price", form.price)
            formData.set("qty", form.qty)

            const response = await API.post("/ticket", formData)
            console.log("Add ticket success : ", response)

                setForm({
                    name_train: "",
                    type_train:"",
                    start_date:"",
                    station_id:"",
                    start_time:"",
                    destination_id:"",
                    arrival_time:"",
                    price:"",
                    qty:"" 
                })

            Navigate("/admin")
        } catch (err) {
            console.log(" add ticket failed : ", err)
        }
    })


    return (
        <div>
            <NavbarAdmin />
            <div>
                <div className="addTicketContainer">
                    <h1>Tambah Tiket</h1>
                    <div>
                        <form className="formAddTicketContainer" onSubmit={(e) => handleSubmit.mutate(e)}>    
                            <div>
                                <div>
                            <input type="text" placeholder="Nama kereta" name="name_train" value={name_train} onChange={handleChange}
                             style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange}placeholder="Jenis Kereta" name="type_train" value={type_train}
                            style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange}placeholder="Tanggal Keberangkatan" name="start_date" value={start_date}
                            style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                        <div>

                            <select onChange={handleChange} name="station_id" style={{ width: "100%", marginBottom: "20px", height:"40px"}} value={station_id}>
                                <option hidden>Stasiun Keberangkatan</option>
                                {stations?.map((data) => (   
                                <option key={data?.id} value={data?.id}>{data.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <input type="text" onChange={handleChange}placeholder="Jam Keberangkatan" name="start_time" value={start_time}
                            style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>

                        <div>
                        <select onChange={handleChange} name="destination_id" style={{ width: "100%", marginBottom: "20px", height:"40px"}} value={destination_id}>
                                <option hidden>Stasiun Tujuan</option>
                                {destinations?.map((data) => (   
                                <option key={data?.id} value={data?.id}>{data.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <input type="text" onChange={handleChange}placeholder="Jam Tiba" name="arrival_time" value={arrival_time}
                            style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange}placeholder="Harga" name="price" value={price}
                            style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                        <div>
                            <input type="text" onChange={handleChange}placeholder="Qty" name="qty" value={qty}
                             style={{ width: "100%", marginBottom: "20px", height:"40px"}}/>
                        </div>
                            </div>
                       

                        <div className="buttonDiv">
                            <button className="buttonAddTicket" type="submit"> Save </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}