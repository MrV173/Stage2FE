import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useMutation} from "react-query";
import {API} from "../../config/api";
import Alert from 'react-bootstrap/Alert';

export default function Register() {

    const title = "Register"
    document.title = "LandTick | " + title;

    const [message, setMessage] = useState(null);

    const [form, setForm] = useState({

        fullname: "",
        username: "",
        email:  "",
        password:"",
    })

    const {fullname, username, email, password} = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =  useMutation(async (e) => {
        try {
            e.preventDefault()

            const response = await API.post("/register", form)

            console.log("register success : ", response)

            const alert = (
                <Alert variant="succes" className="py-1">
                    Register Succes!
                </Alert>
            )
            setMessage(alert)

            setForm ({
                username: "",
                fullname: "",
                email:  "",
                password:"",
            })
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed to register
                </Alert>
            )

            setMessage(alert)
            console.log("Register failed : ", error)
        }
    })



    return (
        <div>
                <div className='titleRegister'>Daftar</div>
                {message && message}
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                <div>
                    <FloatingLabel controlId="username"label="Username"className="mb-3">
                        <Form.Control type="text" placeholder='Username' name="username" value={username} onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="fullname"label="Fullname"className="mb-3">
                        <Form.Control type="text" placeholder='Fullname' name="fullname" value={fullname} onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="email"label="Email"className="mb-3">
                        <Form.Control type="text" placeholder='Email' name="email" value={email} onChange={handleChange}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="password"label="Password"className="mb-3">
                        <Form.Control type="password" placeholder='Password' name="password" value={password} onChange={handleChange}/>
                    </FloatingLabel>
                        <div className='containerRegisterButton'>
                            <button className='buttonRegister'>Daftar</button>
                        </div>
                </div>
            </Form>
        </div>
    )
}